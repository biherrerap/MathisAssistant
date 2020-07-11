from rest_framework import serializers

from .models import Location, Team, Stadium


class StadiumSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Stadium
        fields = ('name', 'location')

class LocationSerializer(serializers.ModelSerializer):
    stadium = StadiumSerializer(read_only=True)

    class Meta:
        model = Location
        fields = ('city' , 'country', 'stadium')

class TeamSerializer(serializers.ModelSerializer):
    location = LocationSerializer(read_only=True)

    class Meta:  
        model = Team
        fields = ('name', 'shield', 'location','score','team_class','type','active','position_history','score_history')   