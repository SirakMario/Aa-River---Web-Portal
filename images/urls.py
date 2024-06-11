from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.index,name="index1"),
    path('products3d',views.products3d,name="products3d")
]