from django.shortcuts import render
from django.http import JsonResponse
from django.core.files import File
import subprocess

# Create your views here.
def home(request):
    context = {}
    return render(request, 'classler/home.html', context)

def submit_code(request):
    context = {}
    code = request.GET.get('code')
    data = {
            'result': 'Cannot get code'
            }
    if code != None:
        with open('/home/ubuntu/python/solution/solution.py', 'w') as f:
            solution = File(f)
            solution.write(code)
        subprocess.call("/home/ubuntu/start_docker.sh", shell=True)
        with open('/home/ubuntu/python/answer.log', 'r') as f:
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
