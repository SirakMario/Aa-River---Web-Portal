from django.shortcuts import render
from .models import Images

# Create your views here.
def index(request):
    images_RGB = Images.objects.all() [0]   #images =  Images.objects.first().image.url
    image_Multispectral = Images.objects.all()[1]
    context = {
        "image" : images_RGB,
        "image_Multispectral" : image_Multispectral 
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
