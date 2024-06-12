from django.shortcuts import render
from .models import Images

# Create your views here.
def index(request):
    images = Images.objects.all().first   #images =  Images.objects.first().image.url
       
    context = {
        "image" : images,
    }
    return render (request, "base.html", context)

def about (request):
    return render(request, "about.html")

def lidar (request):
    
    lidars = Images.objects.all().last      #filter(image_type="Lidar")
    context = {
        "liadr_c": lidars,
    }
    return render(request, "Lidar.html",context)
