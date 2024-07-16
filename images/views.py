from django.shortcuts import render
from .models import Images

# Create your views here.
def index(request):
    return render (request, "base.html")

def about (request):
    return render(request, "about.html")

def multispectral (request):
    images_RGB = Images.objects.filter(image_type='RGB Orthomosaic').first()   #images =  Images.objects.first().image.url
    NDVI = Images.objects.filter(image_type='NDVI').first() 
    NDVI_change = Images.objects.filter(image_type='NDVI Change').first()
    change_detection = Images.objects.filter(image_type='Change Detection').first()
    DSM = Images.objects.filter(image_type='DSM').first()
    DTM = Images.objects.filter(image_type='DTM').first()
    CHM = Images.objects.filter(image_type='CHM').first()
    sfm = Images.objects.filter(image_type='sfm').first()
    context = {
        "image_RGB" : images_RGB,
        "NDVI" : NDVI,
        "NDVI_change": NDVI_change,
        "change_detection": change_detection,
        "DSM": DSM,
        "DTM": DTM,
        "CHM":CHM,
        "sfm":sfm,
    }
    return render (request, "Multispectral.html", context)

def lidar (request):
    
    lidars = Images.objects.filter(image_type='Lidar').first()   #filter(image_type="Lidar")
    DEM_DSM_24 = Images.objects.filter(image_type='DEM_DSM').first()
    Diff_lidar = Images.objects.filter(image_type='Diff_DEM_DSM_Volume').first()
    Hillshade_slope = Images.objects.filter(image_type='Hillshade_slope').first()
    context = {
        "liadr_c": lidars,
        "DEM_DSM_24": DEM_DSM_24,
        "Diff_lidar" : Diff_lidar,
        "Hillshade_slope": Hillshade_slope
    }
    return render(request, "Lidar.html",context)
