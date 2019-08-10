from django.shortcuts import render
from django.http import JsonResponse
from django.core.files import File
from pathlib import Path
import subprocess
import time
import os
import shutil
import json

from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.http import HttpResponse, Http404
from django.http import JsonResponse
from rest_framework import viewsets
from django.db import transaction
from .serializers import CourseSerializer, CourseMiniSerializer, UserSerializer
from .models import Course, EnhancedUser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.utils import timezone

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView

###
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': 'BASE/' + str(user.pk),
            'email': user.email,
        })
###

class CourseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def list(self, request, *arg, **kwargs):
        courses = Course.objects.all()
        serializer = CourseMiniSerializer(courses, many=True)
        return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #authentication_classes = (TokenAuthentication,)
    #permission_classes = (IsAuthenticated,)

class Logout(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    def post(self, request, format=None):
        # simply delete the token to force a login
        print(request.user)
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

@csrf_exempt
@transaction.atomic
def create_social_user(request):
    context = {}

    data = json.loads(request.body)
    new_user = data['user']
    if not new_user:
        return JsonResponse(context)
    new_user_id = new_user['provider'] + '/' + new_user['id']
    try:
        existed_user = EnhancedUser.objects.get(pk=new_user_id)
        if (existed_user):
            context['user_id'] = existed_user.user_id
            return JsonResponse(context)
    except:
        pass
    new_enhanced_user = EnhancedUser(user_id=new_user_id,
        first_name=new_user['firstName'],
        last_name=new_user['lastName'],
        email=new_user['email'],
        authToken=new_user['authToken'],
        provider=new_user['provider'],
        updated_time=timezone.now(),
        created_time=timezone.now(),
        )
    new_enhanced_user.save()
    context['user_id'] = new_enhanced_user.user_id
    return JsonResponse(context)

@csrf_exempt
@transaction.atomic
def purchase(request):
    context = {}
    data = json.loads(request.body)
    user_id = data['user_id']
    try:
        existed_user = EnhancedUser.objects.get(pk=user_id)
        authorized = (existed_user.authorization_level > 0)
        if not authorized:
            existed_user.authorization_level += 1
            existed_user.save()
            authorized = True
        context['authorized'] = authorized
        return JsonResponse(context)
    except:
        print("User doesn't exist!")
        return
