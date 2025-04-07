# Generated by Django 5.2 on 2025-04-07 12:49

import django.utils.timezone
import incidents.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Incident',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('incident_id', models.CharField(default=incidents.models.generate_incident_id, editable=False, max_length=20, unique=True)),
                ('enterprise_or_government', models.CharField(choices=[('Enterprise', 'Enterprise'), ('Government', 'Government')], max_length=20)),
                ('reporter_name', models.CharField(max_length=255)),
                ('reporter_email', models.EmailField(max_length=254)),
                ('reporter_phone', models.CharField(max_length=20)),
                ('incident_details', models.TextField()),
                ('incident_reported_datetime', models.DateTimeField(default=django.utils.timezone.now)),
                ('priority', models.CharField(choices=[('High', 'High'), ('Medium', 'Medium'), ('Low', 'Low')], default='Medium', max_length=10)),
                ('status', models.CharField(choices=[('Open', 'Open'), ('In progress', 'In progress'), ('Closed', 'Closed')], default='Open', max_length=20)),
            ],
        ),
    ]
