from django.contrib import admin
from .models import Team
from .models import Location
from .models import Stadium
from .models import Player
from .models import Tournament
from .models import Match as Matches


# Register your models here.

admin.site.register(Team)
'admin.site.register(Location)'
'admin.site.register(Player)'
admin.site.register(Tournament)
'admin.site.register(Matches)'

@admin.register(Stadium)
class AdvertisingAdmin(admin.ModelAdmin):
    list_display = ('name', 'location')

@admin.register(Location)
class AdvertisingAdmin(admin.ModelAdmin):
    list_display = ('city', 'country')

@admin.register(Matches)
class AdvertisingAdmin(admin.ModelAdmin):
    list_display = ('tournament_id', 'team_a_id', 'team_b_id', 'phase_id', 'group_id')

@admin.register(Player)
class AdvertisingAdmin(admin.ModelAdmin):
    list_display = ('team_id', 'name', 'country')
