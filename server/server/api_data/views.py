from rest_framework import generics as rest_generic_views, permissions
from server.api_data.models import Orders
from server.api_data.serializers import OrdersSerializer


class DeleteOrdersApiView(rest_generic_views.DestroyAPIView):
    queryset = Orders.objects.all()


class EditOrdersApiView(rest_generic_views.UpdateAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer


class ListAllOrdersApiView(rest_generic_views.ListAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer
    permission_classes = (
        permissions.IsAuthenticated,
    )

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.order_by('-id')
        return queryset
