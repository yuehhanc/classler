from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from . import views

from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'courses', views.CourseViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'login/', ObtainAuthToken.as_view()),
    url(r'^logout/', views.Logout.as_view()),
    url(r'^create_social_user/', views.create_social_user, name='create_social_user'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
