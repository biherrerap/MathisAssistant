from django.contrib import admin
from .models import Team
from .models import Statistic
from .models import Location
from .models import Player
from .models import Tournament
from .models import Match as Matches


# Register your models here.

admin.site.register(Team)
admin.site.register(Statistic)
admin.site.register(Location)
admin.site.register(Player)
admin.site.register(Tournament)
admin.site.register(Matches)
