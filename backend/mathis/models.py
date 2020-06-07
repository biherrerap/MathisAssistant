from django.db import models

class Location(models.Model): 
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    stadium = models.CharField(max_length=200)
    class Meta:
        ordering = ['city']
    def __str__(self):
         return "%s:%s" % (self.city, self.country)

class Team(models.Model):
    name = models.CharField(max_length=200)
    shield = models.CharField(max_length=200)
    location_id = models.ForeignKey(Location, on_delete=models.CASCADE)
    class Meta:
        ordering = ['name']
    def __str__(self):
        return self.name

class Statistic(models.Model):
    team_id = models.ForeignKey(Team, on_delete=models.CASCADE)
    team_points = models.IntegerField(default=0)
    team_class = models.IntegerField(default=0)
    team_type = models.IntegerField(default=0)


class Player(models.Model):
    team_id = models.ForeignKey(Team, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    country = models.CharField(max_length=200)


class Tournament(models.Model):
    winner = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='winner')
    second = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='second')
    goal_scorer = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='scorer')
    goals = models.IntegerField(default=0)
    assistances = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='assist')
    assistances = models.IntegerField(default=0)
    winner = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='fair_play')

class Match(models.Model):
    team_a_id = models.ForeignKey(Team, on_delete=models.CASCADE, related_name= 'team_a')
    team_b_id = models.ForeignKey(Team, on_delete=models.CASCADE, related_name= 'team_b')
    goals_team_a = models.IntegerField(default=0)  
    goals_team_b = models.IntegerField(default=0)
    tournament_id = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    phase_id = models.IntegerField(default=0)
    group_id = models.IntegerField(default=0)
