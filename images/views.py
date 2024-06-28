from django.shortcuts import render
from .models import Images

# Create your views here.
def index(request):
    return render (request, "base.html")

def about (request):
    return render(request, "about.html")

def multispectral (request):
    images_RGB = Images.objects.filter(image_type='RGB Orthomosaic').first()   #images =  Images.objects.first().image.url
    image_Multispectral = Images.objects.filter(image_type='NDVI').first() 
    change_detection = Images.objects.filter(image_type='Change Detection').first() 
    sfm = Images.objects.filter(image_type='sfm').first()
    context = {
        "image" : images_RGB,
        "image_Multispectral" : image_Multispectral,
        "change_detection": change_detection,
        "sfm": sfm
    }  
    return render (request, "Multispectral.html", context)

def lidar (request):
    
    lidars = Images.objects.filter(image_type='Lidar').first()   #filter(image_type="Lidar")
    DEM_DSE_24 = Images.objects.filter(image_type='DEM_DSE_24').first()
    Diff_lidar = Images.objects.filter(image_type='Diff_DEM_DSM_Volume').first()
    context = {
        "liadr_c": lidars,
        "DEM_DSE_24": DEM_DSE_24,
        "Diff_lidar" : Diff_lidar,
    }
    return render(request, "Lidar.html",context)
