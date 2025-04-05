# incidents/urls.py
from django.urls import path
from .views import IncidentListCreateAPIView, IncidentRetrieveUpdateDestroyAPIView, IncidentSearchAPIView

urlpatterns = [
    path('', IncidentListCreateAPIView.as_view(), name='incident-list-create'),
    path('<int:pk>/', IncidentRetrieveUpdateDestroyAPIView.as_view(), name='incident-retrieve-update-destroy'),
    path('search/', IncidentSearchAPIView.as_view(), name='incident-search'),
]