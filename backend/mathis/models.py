from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=200)
    shield = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Statistic(models.Model):
    team_id = models.ForeignKey(Team, on_delete=models.CASCADE)
    team_points = models.IntegerField(default=0)
    team_class = models.IntegerField(default=0)
    team_type = models.IntegerField(default=0)

class Location(models.Model):
    team_id = models.ForeignKey(Team, on_delete=models.CASCADE)
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    stadium = models.CharField(max_length=200)

class Player(models.Model):
    team_id = models.ForeignKey(Team, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    country = models.CharField(max_length=200)


class Tournament(models.Model):
    winner = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='winner')
    second = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='second')
    goal_scorer = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='scorer')
    assistances = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='assist')
    edition = models.IntegerField(default=0)


class Match(models.Model):
    team_a_id = models.ForeignKey(Team, on_delete=models.CASCADE, related_name= 'team_a')
    team_b_id = models.ForeignKey(Team, on_delete=models.CASCADE, related_name= 'team_b')
    goals_team_a = models.IntegerField(default=0)  
    goals_team_b = models.IntegerField(default=0)
    tournament_id = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    phase_id = models.IntegerField(default=0)
    group_id = models.IntegerField(default=0)
