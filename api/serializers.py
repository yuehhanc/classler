from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Course, EnhancedUser
from django.utils import timezone


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'topic', 'content', 'link')

class CourseMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'topic')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

        # Store into EnhancedUser
        new_user = validated_data

        if not new_user:
            return user
        new_user_id = 'BASE' + '_' + str(user.id)
        try:
            existed_user = EnhancedUser.objects.get(pk=new_user_id)
            if (existed_user):
                return user
        except:
            pass
        new_enhanced_user = EnhancedUser(user_id=new_user_id,
            first_name=new_user['first_name'],
            last_name=new_user['last_name'],
            email=new_user['email'],
            authToken=user.username,
            provider='BASE',
            updated_time=timezone.now(),
            created_time=timezone.now(),
            )
        new_enhanced_user.save()

        return user