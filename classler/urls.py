from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^submit_code$', views.submit_code, name='submit_code'),
    url(r'^problems/(?P<problem_name>.+)/code-submit$', csrf_exempt(views.code_submit), name='code_submit'),
]