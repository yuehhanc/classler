from django.contrib import admin
from django.urls import path

from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView
from classler import views as classler_views

urlpatterns = [
    url(r'^classler/', include('classler.urls')),
    url(r'^api/', include('api.urls')),
    url(r'^.*', TemplateView.as_view(template_name="classler/home.html"), name="home"),
]
