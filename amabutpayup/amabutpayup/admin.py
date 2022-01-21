from django.contrib import admin
from amabutpayup.models import DetailsModel

class DetailsAdmin(admin.ModelAdmin):
    pass

admin.site.register(DetailsModel, DetailsAdmin)