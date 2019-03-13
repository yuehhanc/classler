from django.db import models

class Course(models.Model):
    topic = models.CharField(max_length=256)
    content = models.CharField(max_length=4096)
    link = models.CharField(max_length=256)
