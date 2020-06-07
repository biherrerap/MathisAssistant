from django.shortcuts import render
from django.http import HttpResponse

from .models import Team

def index(request):
    team_list = Team.objects.all()
    #output = ', '.join([q for q in team_list])
    return HttpResponse(team_list)

def detail(request, team_id):
    return HttpResponse("You're looking at team %s." % team_id)

def name(request, team_id):
    response = "You're looking at name of team %s."
    return HttpResponse(response % team_id)
'''
def vote(request, team_id):
    return HttpResponse("You're voting on question %s." % team_id)
    ''' 