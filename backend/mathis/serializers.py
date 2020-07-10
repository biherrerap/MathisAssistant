from rest_framework import serializers

from .models import Location, Team

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('city' , 'country')

class TeamSerializer(serializers.ModelSerializer):
    location = LocationSerializer(read_only=True)

    class Meta:  
        model = Team
        fields = ('name', 'shield', 'location','score','team_class','type','active','position_history','score_history')   