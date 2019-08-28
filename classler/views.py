from django.shortcuts import render
from django.http import JsonResponse
from django.core.files import File
from pathlib import Path
import subprocess
import time
import os
import shutil
import json
import boto3
import ast

from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.http import HttpResponse, Http404
from rest_framework import viewsets
from .serializers import CourseSerializer, CourseMiniSerializer, UserSerializer
from .models import Course
from api.models import EnhancedUser
from rest_framework.response import Response
from rest_framework.decorators import api_view

WORKER_QUEUE_URL = 'https://sqs.us-east-2.amazonaws.com/664508886403/Classler-Worker-Queue'
RESULT_QUEUE_URL = 'https://sqs.us-east-2.amazonaws.com/664508886403/Code-Result-dev'

# Create your views here.
@ensure_csrf_cookie
def home(request):
    context = {}
    return render(request, 'classler/home.html', context)

def submit_code_demo(request, problem="two_sum"):
    context = {}
    code = request.GET.get('code')
    data = {
            'result': 'Cannot get code'
            }
    # Let the front send the name of a problem. We want to use it to find the matching file.
    if code != None:
        root = '/home/ubuntu/python/'
        folder = current_milli_time()
        solution = root + folder
        os.makedirs(solution)
        with open(solution + '/solution.py', 'w') as f:
            f.write(code)
        subprocess.call("/home/ubuntu/start_docker.sh " + folder, shell=True)
        with open(solution + '/answer.log', 'r') as f:
            ans = ""
            for line in f:
                ans += line
            data['result'] = ans
        shutil.rmtree(solution)

    return JsonResponse(data)

@csrf_exempt
def submit_code(request, problem_name):
    # user_id_passing
    # user_id = json.loads(request.body)['user_id']
    # print(user_id)
    uid = "0"
    t = str(time.time())
    data = {
        'result': 'Something wrong...'
    }
    ######################
    # get user id
    uid = str(json.loads(request.body)['uid'].split('/')[-1])
    print(uid)
    problem_name = json.loads(request.body)['name']
    print(problem_name)
    ######################

    sqs_client = boto3.client('sqs')
    message = {}
    message['code'] = json.loads(request.body)['code']

    # TODO: use real uid
    message['uid'] = uid
    message['time'] = t
    message['host_queue'] = RESULT_QUEUE_URL
    message['problem_num'] = 1 # TODO: use real problem id
    get_result_from_worker = False
    try:
        msg = sqs_client.send_message(QueueUrl=WORKER_QUEUE_URL,
                                MessageBody=json.dumps(message))
        while not get_result_from_worker:
            msgs = sqs_client.receive_message(QueueUrl=RESULT_QUEUE_URL,
                                      MaxNumberOfMessages=1,
                                      WaitTimeSeconds=2)
            if msgs and 'Messages' in msgs:
                for msg in msgs['Messages']:
                    # make sure the msg is the one you want, and then delete it from the queue
                    body = ast.literal_eval(msg['Body'])
                    if body['uid'] == uid and body['time'] == t:
                        ret = sqs_client.delete_message(QueueUrl=RESULT_QUEUE_URL,ReceiptHandle=msg['ReceiptHandle'])
                        data = body
                        get_result_from_worker = True
    except:
        print("submit_code fail....")

    return JsonResponse(data)

@csrf_exempt
def code_submit(request, problem_name):
    context = {}
    data = json.loads(request.body)
    code = data['code']
    print(code)
    data = {
            'result': 'Cannot get code'
            }
    # Let the front send the name of a problem. We want to use it to find the matching file.
    try:
        if code != None:
            root = str(Path.home()) + '/python/'
            folder = current_milli_time()
            solution = root + folder
            os.makedirs(solution)
            pre_code = "from solution_framework.solution import Solution\nimport sys\n\n"
            post_code = "\n\nif __name__ == '__main__':\n    sol = Solution(1, sys.argv[1], 0.1)\n    result = sol.run(two_sum)\n    sys.stdout.flush()"
            full_code = pre_code + code + post_code
            with open(solution + '/two_sum.py', 'w') as f:
                f.write(full_code)
            # docker run --rm --volumes-from test test cp /$HOME/python/$TIME/two_sum.py /$HOME/python/solution/ && python /$HOME/python/solution/two_sum.py $TIME
            cmd = "docker run --rm --volumes-from test test cp " + solution + "/two_sum.py " + root + "solution/ && python " + root + "solution/two_sum.py " + solution
            subprocess.call(cmd, shell=True)
            with open(solution + '/answer.log', 'r') as f:
                ans = ""
                for line in f:
                    ans += line
                data['result'] = ans
            shutil.rmtree(solution)
    except Exception as e:
        data = {"result": "Result: " + str(e),
              "num_test_passed": "test passed: 0/0 tests",
              "runtime": "Time: N/A",
              }
    # TODO: Change the dummy result in to a real one
    return JsonResponse(data)

def compileCode(request):
    # Note
    # One of the ways to compile the code is to use "eval()"
    # we can directly code it in the surver and return the result as a http response
    pass

def current_milli_time():
    return str(int(round(time.time() * 1000)))
