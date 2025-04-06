# users/urls.py
from django.urls import path
from .views import RegistrationAPIView, LoginAPIView, LogoutAPIView, UserDetailsAPIView

urlpatterns = [
    path('register/', RegistrationAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('me/', UserDetailsAPIView.as_view(), name='user-details'),
]
