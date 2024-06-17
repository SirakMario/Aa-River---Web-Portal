from django.contrib import admin
from . models import Images

# Register your models here.
class ImagesAdmin (admin.ModelAdmin):
    list_display = ("name","date","image_type")
    list_display_links = ("name","date","image_type")
    search_fields = ("name","date","image_type","description_multi_spect")
admin.site.register(Images, ImagesAdmin)