# Generated by Django 5.0.6 on 2024-07-04 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='images',
            name='image_type',
            field=models.CharField(choices=[('RGB Orthomosaic', 'RGB Orthomosaic'), ('NDVI', 'NDVI'), ('NDVI Change', 'NDVI Change'), ('Supervised', 'Supervised'), ('Unsupervised', 'Unsupervised'), ('Change Detection', 'Change Detection'), ('DSM', 'DSM'), ('CHM', 'CHM'), ('Lidar', 'Lidar'), ('sfm', 'sfm'), ('DEM_DSM', 'DEM_DSM'), ('Diff_DEM_DSM_Volume', 'Diff_DEM_DSM_Volume')], max_length=20),
        ),
    ]
