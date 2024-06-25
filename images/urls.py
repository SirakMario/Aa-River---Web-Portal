from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.index,name="index"),
    path('multispectral',views.multispectral, name="multispectral"),
    path('lidar',views.lidar,name="lidar"),
    path('about',views.about,name="about"),
]
