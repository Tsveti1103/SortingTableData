from django.contrib.auth import get_user_model
from rest_framework import serializers

from server.api_data.models import Orders

UserModel = get_user_model()


class OrdersListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'


class OrdersCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        exclude = ('user',)

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class OrdersEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        exclude = ('user',)

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
