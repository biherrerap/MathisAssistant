from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'locations', views.LocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

 
'''
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:team_id>/', views.detail, name='detail'),
]
urlpatterns = [
    # ex: /mathis/
    path('', views.index, name='index'),
    # ex: /mathis/5/
    path('<int:team_id>/', views.detail, name='detail'),
    # ex: /mathis/5/results/
    path('<int:team_id>/name/', views.name, name='name'),
    # ex: /mathis/5/vote/
    #path('<int:question_id>/vote/', views.vote, name='vote'),
]
'''
