from rest_framework import generics, permissions
from .models import Incident
from .serializers import IncidentSerializer

class IncidentListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = IncidentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Incident.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user,
                        reporter_name=self.request.user.username,
                        reporter_email=self.request.user.email,
                        reporter_phone=self.request.user.phone_number)

class IncidentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = IncidentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Incident.objects.filter(created_by=self.request.user)

class IncidentSearchAPIView(generics.ListAPIView):
    serializer_class = IncidentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        incident_id = self.request.query_params.get('incident_id', None)
        if incident_id:
            return Incident.objects.filter(created_by=self.request.user, incident_id=incident_id)
        return Incident.objects.none()

