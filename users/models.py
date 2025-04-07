from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(('email address'), unique=True)
    user_type = models.CharField(max_length=20, choices=[('Individual', 'Individual'), ('Enterprise', 'Enterprise'),
                                                         ('Government', 'Government')], default='Individual')
    first_name = models.CharField(max_length=150, blank=False, null=False)
    last_name = models.CharField(max_length=150, blank=False, null=False)
    address = models.TextField(blank=False, null=False)
    country = models.CharField(max_length=100, blank=False, null=False)
    state = models.CharField(max_length=100, blank=False, null=False)
    city = models.CharField(max_length=100, blank=False, null=False)
    pin_code = models.CharField(max_length=10, blank=False, null=False)
    mobile_isd_code = models.CharField(max_length=6, blank=False, null=False)
    mobile_number = models.CharField(max_length=20, blank=False, null=False)
    fax = models.CharField(max_length=20, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'address', 'country', 'state', 'city', 'pincode', 'mobile_isd_code',
                       'mobile_number']

    def __str__(self):
        return self.email
