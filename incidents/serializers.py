# incidents/serializers.py
from rest_framework import serializers
from .models import Incident

class IncidentSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')
    # Note: reporter_name, reporter_email, reporter_phone are implicitly included with fields = '__all__'
    # and will use the model's default behavior (which is NOT required=False).
    # If you want to explicitly make them not required in the serializer:
    reporter_name = serializers.CharField(max_length=255, required=False)
    reporter_email = serializers.EmailField(required=False)
    reporter_phone = serializers.CharField(max_length=20, required=False)

    class Meta:
        model = Incident
        fields = '__all__'
        read_only_fields = ('incident_id', 'incident_reported_datetime','created_by')

    def validate(self, data):
        if self.instance and self.instance.status == Incident.CLOSED and any(self.initial_data.get(field) != getattr(self.instance, field) for field in self.fields if field not in ['id', 'incident_id', 'incident_reported_datetime', 'created_by']):
            raise serializers.ValidationError("Closed incidents cannot be edited.")
        return data