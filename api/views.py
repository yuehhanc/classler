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
from rest_framework import viewsets
from .serializers import CourseSerializer, CourseMiniSerializer, UserSerializer
from .models import Course
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView


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