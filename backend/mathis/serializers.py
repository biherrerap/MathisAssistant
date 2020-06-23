from rest_framework import serializers

from .models import Location, Team

class LocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Location
        fields = ('city' , 'country')

class TeamSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = ('name', 'shield', 'location','score','team_class','type','active','position_history','score_history')