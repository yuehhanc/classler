from django.shortcuts import render
from django.http import JsonResponse
from django.core.files import File
import subprocess
import time
import os
import shutil

# Create your views here.
def home(request):
    context = {}
    return render(request, 'classler/home.html', context)

def submit_code(request, problem="two_sum"):
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

def two_sums_submit(request, problem):
    context = {}
    code = request.GET.get('code')
    data = {
            'result': 'Cannot get code'
            }
    # Let the front send the name of a problem. We want to use it to find the matching file.
    if code != None:
        pre_code = "from solution_framework.solution import Solution\nimport sys\n\n"
        post_code = "\n\nif __name__ == '__main__':\n    sol = Solution(1, 0.1)\n    result = sol.run(two_sum)\n    sys.stdout.flush()"
        full_code = pre_code + code + post_code
        with open('/Users/roland/python/solution/two_sum.py', 'w') as f:
            solution = File(f)
            solution.write(full_code)
        subprocess.call("/Users/roland/start_docker.sh", shell=True)
        with open('/Users/roland/python/answer.log', 'r') as f:
            ans = ""
            for line in f:
                ans += line
            data['result'] = ans

    return JsonResponse(data)

def compileCode(request):
    # Note
    # One of the ways to compile the code is to use "eval()"
    # we can directly code it in the surver and return the result as a http response
    pass

def current_milli_time():
    return str(int(round(time.time() * 1000)))
