from django.shortcuts import render
from django.http import JsonResponse
from django.core.files import File
from pathlib import Path
import subprocess
import time
import os
import shutil
import json

from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.http import HttpResponse, Http404
from rest_framework import viewsets
from .serializers import CourseSerializer, CourseMiniSerializer
from .models import Course
from rest_framework.response import Response
from rest_framework.decorators import api_view


class CourseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def list(self, request, *arg, **kwargs):
        courses = Course.objects.all()
        serializer = CourseMiniSerializer(courses, many=True)
        return Response(serializer.data)

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

def submit_code(request, problem="two_sum"):
    context = {}
    code = request.GET.get('code')
    data = {
            'result': 'Cannot get code'
            }
    # Let the front send the name of a problem. We want to use it to find the matching file.
    if code != None:
        root = str(Path.home()) + '/python/'
        folder = current_milli_time()
        DOCKER_ROOT = '/home/ubuntu/python/'
        docker_solution = DOCKER_ROOT + folder
        solution = root + folder
        print(getpass.getuser())
        os.makedirs(solution)
        pre_code = "from solution_framework.solution import Solution\nimport sys\n\n"
        post_code = "\n\nif __name__ == '__main__':\n    sol = Solution(1, sys.argv[1], 0.1)\n    result = sol.run(two_sum)\n    sys.stdout.flush()"
        full_code = pre_code + code + post_code
        with open(solution + '/two_sum.py', 'w') as f:
            f.write(full_code)
        # docker run --rm --volumes-from test test cp /$HOME/python/$TIME/two_sum.py /$HOME/python/solution/ && python /$HOME/python/solution/two_sum.py $TIME
        cmd = 'docker run --rm --volumes-from test test /bin/bash -c "cp ' + docker_solution + '/two_sum.py ' + DOCKER_ROOT + 'solution/ && python ' + DOCKER_ROOT + 'solution/two_sum.py ' + docker_solution + '"'
        subprocess.call(cmd, shell=True)
        with open(solution + '/answer.log', 'r') as f:
            ans = ""
            for line in f:
                ans += line
            data['result'] = ans
        shutil.rmtree(solution)

    return Response(data)

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
    except Exception as ㄨe:
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
