from django.shortcuts import render
from django.http import HttpResponse

def root(request):
    return HttpResponse('Hello')

def top(request):
    return render(request, 'top.html')

def contents(request):
    return render(request, 'contents.html')

def works_view(request):
    # 'rotation_range' という名前で range(36) をコンテキストに渡す
    context = {
        'rotation_range': range(36),
    }
    return render(request, 'contents.html', context)
def profile(request):
    return render(request, 'profile.html')


def other(request):
    return render(request, 'other.html')

# Create your views here.
