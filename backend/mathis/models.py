from django.db import models

class Location(models.Model): 
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    class Meta:
        ordering = ['city']
    def __str__(self):
         return self.city

class Stadium(models.Model):
    name = models.CharField(max_length=200)
    location = models.ForeignKey(Location, on_delete=models.CASCADE,default=None)
    class Meta:
        ordering = ['name']
    def __str__(self):
         return self.name

class Team(models.Model):
    name = models.CharField(max_length=200)
    shield = models.CharField(max_length=200)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, default=None)
    stadium = models.ForeignKey(Stadium, on_delete=models.CASCADE, default=None)
    team_points = models.IntegerField(default=0)
    team_class = models.IntegerField(default=0)
    team_type = models.IntegerField(default=0)
    team_active = models.IntegerField(default=1)
    position_history = models.CharField(max_length=1000, default=None)
    score_history = models.CharField(max_length=1000, default=None)
    class Meta:
        ordering = ['name']
    def __str__(self):
        return self.name

class Player(models.Model):
    team_id = models.ForeignKey(Team, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    class Meta:
        ordering = ['name']
    def __str__(self):
        return self.name

class Tournament(models.Model):
    identif = models.IntegerField(default=0, blank=True)
    goal_scorer = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='scorer', default=None, blank=True)
    goals = models.IntegerField(default=None, blank=True)
    assistant = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='assist', default=None, blank=True)
    assistances = models.IntegerField(default=None, blank=True)
    fair_play = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='fair_play', default=None, blank=True)
    class Meta:
        ordering = ['id']
    def __int__(self):
        return self.identif

       
class Match(models.Model):
    tournament_id = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    team_a_id = models.ForeignKey(Team, on_delete=models.CASCADE, related_name= 'team_a')
    team_b_id = models.ForeignKey(Team, on_delete=models.CASCADE, related_name= 'team_b')
    goals_team_a = models.IntegerField(default=0)  
    goals_team_b = models.IntegerField(default=0)
    goals_team_ap = models.IntegerField(default=0)
    goals_team_bp = models.IntegerField(default=0)  
    phase_id = models.IntegerField(default=0)
    group_id = models.IntegerField(default=0)
    dt = models.IntegerField(default=0)
    class Meta:
        verbose_name = 'Match'
        verbose_name_plural = 'Matches'
   