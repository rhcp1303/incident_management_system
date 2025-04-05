# incidents/serializers.py
from rest_framework import serializers
from .models import Incident

class IncidentSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')

    class Meta:
        model = Incident
        fields = '__all__'
        read_only_fields = ('incident_id', 'incident_reported_datetime')

    def validate(self, data):
        if self.instance and self.instance.status == Incident.CLOSED and any(self.initial_data.get(field) != getattr(self.instance, field) for field in self.fields if field not in ['id', 'incident_id', 'incident_reported_datetime', 'created_by']):
            raise serializers.ValidationError("Closed incidents cannot be edited.")
        return data

# incidents/views.py
from rest_framework import generics, permissions
from rest_framework.exceptions import ValidationError
from .models import Incident
from .serializers import IncidentSerializer

class IncidentListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = IncidentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Incident.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        # Auto-fill reporter details if the logged-in user exists
        serializer.save(created_by=self.request.user,
                        reporter_name=self.request.user.username,
                        reporter_email=self.request.user.email,
                        reporter_phone=self.request.user.phone_number)

class IncidentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = IncidentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Incident.objects.filter(created_by=self.request.user)