# Generated by Django 5.0.6 on 2024-07-04 13:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateField(default=datetime.datetime.now)),
                ('image_type', models.CharField(choices=[('RGB Orthomosaic', 'RGB Orthomosaic'), ('NDVI', 'NDVI'), ('NDVI Change', 'NDVI Change'), ('Supervised', 'Supervised'), ('Unsupervised', 'Unsupervised'), ('Change Detection', 'Change Detection'), ('DSM', 'DSM'), ('CHM', 'CHM')], max_length=20)),
                ('description', models.TextField(blank=True)),
            ],
        ),
    ]
