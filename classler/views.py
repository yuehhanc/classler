from django.shortcuts import render
from django.core.files import File
import subprocess

# Create your views here.
def home(request):
    context = {}
    return render(request, 'classler/home.html', context)

def submit_code(request):
    context = {}
    code = request.POST.get('code')
    if code != None:
        # Taking Two Sum as example
        code = "from solution_framework import solution\n"+code+"if __name__ == '__main__':\n\tSolution.run('two_sum.py', has_two_sum)"
        with open('/Users/roland/Desktop/Program_Development/classler/classler/solution/two_sum.py', 'w') as f:
            solution = File(f)
            solution.write(code)
        # subprocess.call("/home/ubuntu/start_docker.sh", shell=True)

        print(code+"\n two_sum([1,2,3,4,5], 4)")
        code_object = compile(code+"\ntwo_sum([1,2,3,4,5], 4)", "two_sum", "exec")
        exec(code_object)
        context['result'] = 123
    else:
        print('Not Found')

    return render(request, 'classler/home.html', context)

def compileCode(request):
    # Note
    # One of the ways to compile the code is to use "eval()"
    # we can directly code it in the surver and return the result as a http response
    pass