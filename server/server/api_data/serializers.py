from django.contrib.auth import get_user_model
from rest_framework import serializers

from server.api_data.models import Orders

UserModel = get_user_model()


class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'

