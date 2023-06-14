from django.urls import path

from server.api_data.views import DeleteOrdersApiView, EditOrdersApiView, ListAllOrdersApiView

urlpatterns = (
    path('all', ListAllOrdersApiView.as_view(), name="all tasks"),
    path('delete/<int:pk>', DeleteOrdersApiView.as_view(), name="delete task"),
    path('edit/<int:pk>', EditOrdersApiView.as_view(), name="edit task"),
    # path('create', CreateOrdersApiView.as_view(), name="create task"),
)
