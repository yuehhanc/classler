from django.shortcuts import render

# Create your views here.
def home(request):
    context = {}
    return render(request, 'classler/home.html', context)

def compileCode(request):
    # Note
    # One of the ways to compile the code is to use "eval()"
    # we can directly code it in the surver and return the result as a http response
    pass