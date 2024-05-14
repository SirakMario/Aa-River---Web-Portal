from django.shortcuts import render
from .models import Images

# Create your views here.
def index(request):
    images = Images.objects.first()   #images =  Images.objects.first().image.url
    context = {
        "image" : images,
    }
    return render (request, "base.html", context)