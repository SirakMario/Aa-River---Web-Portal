from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.index,name="index"),
    path('lidar',views.lidar,name="lidar"),
    path('about',views.about,name="about"),
]
