from rest_framework import serializers

from .models import Location, Team, Stadium, Match


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
    stadium = StadiumSerializer(read_only=True)

    class Meta:  
        model = Team
        fields = ('name', 'shield', 'stadium', 'location','score','team_class','type','active','position_history','score_history')   

class MatchSerializer(serializers.ModelSerializer):
    team_a_id = TeamSerializer(read_only=True)
    team_b_id = TeamSerializer(read_only=True)

    class Meta:
        model = Match
        fields = ('tournament_id','team_a_id', 'team_b_id', 'goals_team_a', 'goals_team_b', 'goals_team_ap', 'goals_team_bp', 'phase_id', 'group_id', 'dt')