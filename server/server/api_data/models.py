from django.db import models
from django.contrib.auth import get_user_model

from server.api_data.mixins import PaymentMethod

UserModel = get_user_model()


class Orders(models.Model):
    MAX_CLIENT_NAME_LENGTH = 50

    client_name = models.CharField(
        max_length=MAX_CLIENT_NAME_LENGTH,
        null=False,
        blank=False,
        unique=True,
    )

    details = models.TextField()
    price = models.FloatField(
    )

    date_created = models.DateTimeField(
        auto_now_add=True,
    )
    delivery_date = models.DateField()
    payment_method = models.CharField(
        choices=PaymentMethod.choices(),
        max_length=PaymentMethod.max_len(),
    )

    paid = models.BooleanField()
    new_client = models.BooleanField()
    finished = models.BooleanField()
    refused = models.BooleanField()

    def __str__(self):
        return self.client_name
