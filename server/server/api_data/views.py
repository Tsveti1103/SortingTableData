from rest_framework import generics as rest_generic_views
from server.api_data.models import Orders
from server.api_data.serializers import OrdersListSerializer, OrdersEditSerializer


class DeleteOrdersApiView(rest_generic_views.DestroyAPIView):
    queryset = Orders.objects.all()


class EditOrdersApiView(rest_generic_views.UpdateAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrdersEditSerializer

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.order_by('-id')
        return queryset


class ListAllOrdersApiView(rest_generic_views.ListAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrdersListSerializer

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(user=self.request.user.pk)
        queryset = queryset.order_by('-id')
        return queryset
