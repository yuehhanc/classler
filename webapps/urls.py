from django.contrib import admin
from django.urls import path

from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from classler import views as classler_views

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^$', classler_views.home),
    url(r'^classler/', include('classler.urls')),
]
