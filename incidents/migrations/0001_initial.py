# Generated by Django 5.2 on 2025-04-06 13:18

import django.db.models.deletion
import django.utils.timezone
import incidents.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Incident',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('incident_id', models.CharField(default=incidents.models.generate_incident_id, editable=False, max_length=20, unique=True)),
                ('enterprise_or_government', models.CharField(choices=[('Enterprise', 'Enterprise'), ('Government', 'Government')], max_length=20)),
                ('reporter_name', models.CharField(max_length=255)),
                ('reporter_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('reporter_phone', models.CharField(blank=True, max_length=20, null=True)),
                ('incident_details', models.TextField()),
                ('incident_reported_datetime', models.DateTimeField(default=django.utils.timezone.now)),
                ('priority', models.CharField(choices=[('High', 'High'), ('Medium', 'Medium'), ('Low', 'Low')], default='Medium', max_length=10)),
                ('status', models.CharField(choices=[('Open', 'Open'), ('In progress', 'In progress'), ('Closed', 'Closed')], default='Open', max_length=20)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
