from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from users import serializers
from .serializers import RegistrationSerializer, UserSerializer
import requests


class RegistrationAPIView(generics.GenericAPIView):
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"user": UserSerializer(user, context=self.get_serializer_context()).data,
                             "message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(generics.GenericAPIView):
    serializer_class = serializers.UserSerializer

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutAPIView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)


class UserDetailsAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class FetchCityCountryAPIView(generics.GenericAPIView):
    def post(self, request):
        pin_code = request.data.get('pin_code')
        if not pin_code:
            return Response({"error": "Pin code is required"}, status=status.HTTP_400_BAD_REQUEST)
        api_url = f"https://api.postcodes.io/postcodes/{pin_code}"
        try:
            response = requests.get(api_url)
            response.raise_for_status()
            data = response.json()
            if data and data.get('status') == 200 and data.get('result'):
                city = data['result'].get('admin_district') or data['result'].get('region')
                country = data['result'].get('country')
                return Response({"city": city, "country": country}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Could not find city and country for this pin code"},
                                status=status.HTTP_404_NOT_FOUND)
        except requests.exceptions.RequestException as e:
            return Response({"error": f"Error fetching data: {e}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
