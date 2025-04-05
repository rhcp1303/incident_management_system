from django.db import models
from django.utils import timezone
import random
import string
from django.conf import settings

def generate_incident_id():
    random_digits = ''.join(random.choices(string.digits, k=5))
    current_year = timezone.now().year
    return f"RMG{random_digits}{current_year}"

class Incident(models.Model):
    ENTERPRISE = 'Enterprise'
    GOVERNMENT = 'Government'
    ORG_CHOICES = [
        (ENTERPRISE, 'Enterprise'),
        (GOVERNMENT, 'Government'),
    ]
    HIGH = 'High'
    MEDIUM = 'Medium'
    LOW = 'Low'
    PRIORITY_CHOICES = [
        (HIGH, 'High'),
        (MEDIUM, 'Medium'),
        (LOW, 'Low'),
    ]
    OPEN = 'Open'
    IN_PROGRESS = 'In progress'
    CLOSED = 'Closed'
    STATUS_CHOICES = [
        (OPEN, 'Open'),
        (IN_PROGRESS, 'In progress'),
        (CLOSED, 'Closed'),
    ]

    incident_id = models.CharField(max_length=20, unique=True, default=generate_incident_id, editable=False)
    enterprise_or_government = models.CharField(max_length=20, choices=ORG_CHOICES)
    reporter_name = models.CharField(max_length=255)
    reporter_email = models.EmailField(blank=True, null=True)
    reporter_phone = models.CharField(max_length=20, blank=True, null=True)
    incident_details = models.TextField()
    incident_reported_datetime = models.DateTimeField(default=timezone.now)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default=MEDIUM)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=OPEN)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.incident_id