from django.contrib import admin

from server.api_data.models import Orders


@admin.register(Orders)
class PlacesAdmin(admin.ModelAdmin):
    list_display = ('client_name', 'date_created', 'delivery_date', 'finished', 'refused')
