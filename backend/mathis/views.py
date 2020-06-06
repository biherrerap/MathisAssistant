from django.shortcuts import render
from django.http import HttpResponse

from .models import Team

def index(request):
    teams = Team.objects
    return HttpResponse("Hello, world. You're at the mathis index.")

def detail(request, team_id):
    return HttpResponse("You're looking at team %s." % team_id)

def name(request, team_id):
    response = "You're looking at name of team %s."
    return HttpResponse(response % team_id)
'''
def vote(request, team_id):
    return HttpResponse("You're voting on question %s." % team_id)
    '''