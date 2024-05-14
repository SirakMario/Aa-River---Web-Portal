from django.db import models
from datetime import datetime
# Create your models here.

class Images(models.Model):
    image_choice = (
        ("Multispectral","Multispectral"),
        ("NDVI","NDVI"),
        ("Lidar","Lidar"),
    )
    
    name = models.CharField (max_length=100, blank=False)
    date = models.DateField(default= datetime.now)
    image_type = models.CharField (choices=image_choice)
    
    image_multi_spect = models.ImageField (upload_to='images_to/', blank=True)
    description_multi_spect = models.TextField (blank=True)
    
    
    def __str__(self):
        return self.name
    
