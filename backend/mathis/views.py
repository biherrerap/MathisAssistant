from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import LocationSerializer, TeamSerializer, StadiumSerializer

from .models import Location, Team, Stadium

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all().order_by('city')
    serializer_class = LocationSerializer

class StadiumViewSet(viewsets.ModelViewSet):
    queryset = Stadium.objects.all().order_by('name')
    serializer_class = StadiumSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all().order_by('-score')
    serializer_class = TeamSerializer