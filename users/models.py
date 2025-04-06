from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    user_type = models.CharField(max_length=20, choices=[('Individual', 'Individual'), ('Enterprise', 'Enterprise'),
                                                         ('Government', 'Government')], default='Individual')
    first_name = models.CharField(max_length=150, blank=False, null=False)
    last_name = models.CharField(max_length=150, blank=False, null=False)
    email = models.CharField(max_length=150, blank=False, null=False)
    address = models.TextField(blank=False, null=False)
    country = models.CharField(max_length=100, blank=False, null=False)
    state = models.CharField(max_length=100, blank=False, null=False)
    city = models.CharField(max_length=100, blank=False, null=False)
    pin_code = models.CharField(max_length=10, blank=False, null=False)
    mobile_isd_code = models.CharField(max_length=6, blank=False, null=False)
    mobile_number = models.CharField(max_length=20, blank=False, null=False)
    fax = models.CharField(max_length=20, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name=('groups'),
        blank=True,
        help_text=(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="incident_management_users_groups",
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name=('user permissions'),
        blank=True,
        help_text=('Specific permissions for this user.'),
        related_name="incident_management_users_permissions",
        related_query_name="user",
    )

    def __str__(self):
        return self.email
