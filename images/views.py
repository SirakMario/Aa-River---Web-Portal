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
    Supervised = Images.objects.filter(image_type='Supervised').first()
    Unsupervised = Images.objects.filter(image_type='Unsupervised').first()
    change_detection = Images.objects.filter(image_type='Change Detection').first()
    DSM = Images.objects.filter(image_type='DSM').first()
    CHM = Images.objects.filter(image_type='CHM').first()
    sfm = Images.objects.filter(image_type='sfm').first()
    context = {
        "image_RGB" : images_RGB,
        "NDVI" : NDVI,
        "NDVI_change": NDVI_change,
        "Supervised": Supervised,
        "Unsupervised": Unsupervised,
        "change_detection": change_detection,
        "DSM": DSM,
        "CHM":CHM,
        "sfm":sfm,
    }
    return render (request, "Multispectral.html", context)

def lidar (request):
    
    lidars = Images.objects.filter(image_type='Lidar').first()   #filter(image_type="Lidar")
    DEM_DSE_24 = Images.objects.filter(image_type='DEM_DSE').first()
    Diff_lidar = Images.objects.filter(image_type='Diff_DEM_DSM_Volume').first()
    context = {
        "liadr_c": lidars,
        "DEM_DSE_24": DEM_DSE_24,
        "Diff_lidar" : Diff_lidar,
    }
    return render(request, "Lidar.html",context)
