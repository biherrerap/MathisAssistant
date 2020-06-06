from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the mathis index.")

def detail(request, team_id):
    return HttpResponse("You're looking at team %s." % team_id)
