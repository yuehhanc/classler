from django.contrib import admin
from django.urls import path

from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView
from classler import views as classler_views

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'courses', classler_views.CourseViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^classler/', include('classler.urls')),
    url(r'^.*', TemplateView.as_view(template_name="classler/home.html"), name="home"),

    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
