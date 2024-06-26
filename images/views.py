from django.shortcuts import render
from .models import Images

# Create your views here.
def index(request):
    images_RGB = Images.objects.filter(image_type='RGB Orthomosaic').first()   #images =  Images.objects.first().image.url
    image_Multispectral = Images.objects.filter(image_type='Multispectral').first() 
    change_detection = Images.objects.filter(image_type='Change Detection').first() 
    context = {
        "image" : images_RGB,
        "image_Multispectral" : image_Multispectral,
        "change_detection": change_detection
    }
    return render (request, "base.html", context)

def about (request):
    return render(request, "about.html")

def multispectral (request):
    images_RGB = Images.objects.filter(image_type='RGB Orthomosaic').first()   #images =  Images.objects.first().image.url
    image_Multispectral = Images.objects.filter(image_type='NDVI').first() 
    change_detection = Images.objects.filter(image_type='Change Detection').first() 
    sfm = Images.objects.filter(image_type='SfM').first()
    context = {
        "image" : images_RGB,
        "image_Multispectral" : image_Multispectral,
        "change_detection": change_detection,
        "sfm": sfm
    }
    return render (request, "Multispectral.html", context)

def lidar (request):
    
    lidars = Images.objects.filter(image_type='Lidar').first()    #filter(image_type="Lidar")
    context = {
        "liadr_c": lidars,
    }
    return render(request, "Lidar.html",context)
