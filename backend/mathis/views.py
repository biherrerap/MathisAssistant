from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import LocationSerializer, TeamSerializer, StadiumSerializer, MatchSerializer

from .models import Location, Team, Stadium, Match

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all().order_by('city')
    serializer_class = LocationSerializer

class StadiumViewSet(viewsets.ModelViewSet):
    queryset = Stadium.objects.all().order_by('name')
    serializer_class = StadiumSerializer

class TeamViewSet(viewsets.ModelViewSet):
#    serializer_class = TeamSerializer
    queryset = Team.objects.all().order_by('-score')
'''
    def get_queryset(self):
        team_name = self.kwargs['tname']
        print('team_name')
        queryset = Team.objects.filter(name=team_name) 
        return queryset
'''
class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all().order_by('id')
    serializer_class = MatchSerializer   
