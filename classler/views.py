from django.shortcuts import render

# Create your views here.
def home(request):
    context = {}
    return render(request, 'classler/home.html', context)

def submit_code(request):
    context = {}
    code = request.POST.get('code')
    if code != None:
        print(code+"\n two_sum([1,2,3,4,5], 4)")
        code_object = compile(code+"\ntwo_sum([1,2,3,4,5], 4)", "two_sum", "exec")
        exec(code_object)

    return render(request, 'classler/home.html', context)

def compileCode(request):
    # Note
    # One of the ways to compile the code is to use "eval()"
    # we can directly code it in the surver and return the result as a http response
    pass