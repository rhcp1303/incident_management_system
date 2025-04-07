from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistrationSerializer, UserSerializer
from django.contrib.auth.hashers import check_password
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from datetime import datetime, timezone


class RegistrationAPIView(generics.GenericAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"user": UserSerializer(user, context=self.get_serializer_context()).data,
                             "message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = User.objects.get(email=email)
        if check_password(password, user.password):
            refresh = RefreshToken.for_user(user)
            access_token_lifetime = settings.SIMPLE_JWT.get('ACCESS_TOKEN_LIFETIME')
            expiry_timestamp = int(
                (datetime.now(timezone.utc) + access_token_lifetime).timestamp() * 1000)
            print(expiry_timestamp)

            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'expiry': expiry_timestamp,
                "message": "Login successful"
            }, status=status.HTTP_200_OK)
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
