from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'location', views.LocationViewSet)
router.register(r'match', views.MatchViewSet)
router.register(r'stadium', views.StadiumViewSet)
#router.register(r'team/(?P<tname>.+)/$', views.TeamViewSet, basename='teamviewset')
router.register(r'team', views.TeamViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

 