from django.db import models
from datetime import datetime
# Create your models here.

class Images(models.Model):
    image_choice = (
        ("RGB Orthomosaic", "RGB Orthomosaic"),
        ("NDVI","NDVI"),
        ("NDVI Change","NDVI Change"),
        ("Supervised", "Supervised"),
        ("Unsupervised","Unsupervised"),
        ("Change Detection", "Change Detection"),
        ("DSM","DSM"),
        ("CHM","CHM"),
        ("Lidar","Lidar"),
        ("sfm","sfm"),
        ("DEM_DSM","DEM_DSM"),
        ("Diff_DEM_DSM_Volume","Diff_DEM_DSM_Volume")
    )
    
    name = models.CharField (max_length=100, blank=False)
    date = models.DateField(default= datetime.now)
    image_type = models.CharField (max_length= 20, choices=image_choice)
    description = models.TextField (blank=True)
    
    
    def __str__(self):
        return self.name
    
