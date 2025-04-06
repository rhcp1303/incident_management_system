from rest_framework import serializers
from .models import User

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ('user_type', 'first_name', 'last_name', 'email', 'address', 'country', 'state', 'city',
                  'pin_code', 'mobile_isd_code', 'mobile_number', 'fax', 'phone', 'password', 'password2')
        extra_kwargs = {
            'email': {'required': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'user_type': {'required': True},
            'address': {'required': True},
            'country': {'required': True},
            'state': {'required': True},
            'city': {'required': True},
            'pin_code': {'required': True},
            'mobile_isd_code': {'required': True},
            'mobile_number': {'required': True}

        }

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return data

    def create(self, validated_data):
        user = User.objects.create(
            user_type=validated_data['user_type'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            address=validated_data['address'],
            country=validated_data['country'],
            state=validated_data['state'],
            city=validated_data['city'],
            pin_code=validated_data['pin_code'],
            mobile_isd_code=validated_data.get('mobile_isd_code', ''),
            mobile_number=validated_data.get('mobile_number', ''),
            fax=validated_data.get('fax', ''),
            phone=validated_data.get('phone', '')
        )

        user.set_password(validated_data['password'])
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'user_type', 'first_name', 'last_name', 'email', 'address', 'country', 'state', 'city',
                  'pin_code', 'mobile_isd_code', 'mobile_number', 'fax', 'phone')