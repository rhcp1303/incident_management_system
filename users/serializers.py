# users/serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User as AuthUser
from .models import User

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ('username', 'email', 'phone_number', 'address', 'pin_code', 'city', 'country', 'password', 'password2')
        extra_kwargs = {
            'email': {'required': True}
        }

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return data

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            phone_number=validated_data.get('phone_number', ''),
            address=validated_data.get('address', ''),
            pin_code=validated_data.get('pin_code', ''),
            city=validated_data.get('city', ''),
            country=validated_data.get('country', '')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'phone_number', 'address', 'pin_code', 'city', 'country')

