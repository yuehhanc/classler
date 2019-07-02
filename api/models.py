from django.db import models

class Course(models.Model):
    topic = models.CharField(max_length=256)
    content = models.CharField(max_length=4096)
    link = models.CharField(max_length=256)

class Submission(models.Model):
    problem_name = models.CharField(max_length=256)
    result = models.CharField(max_length=256)

class EnhancedUser(models.Model):
    user_id = models.CharField(max_length=20, blank=False, primary_key=True) #provider + numeric id
    photo_url = models.CharField(max_length=100, blank=True)
    first_name = models.CharField(blank=False, max_length=20)
    last_name = models.CharField(blank=False, max_length=20)
    email = models.EmailField(blank=True, max_length=50)
    authToken = models.CharField(blank=False, max_length=200)
    provider = models.CharField(blank=False, max_length=15)
    created_time  = models.DateTimeField()
    updated_time  = models.DateTimeField()
    authorization_level = models.IntegerField(default=0)

    def __unicode__(self):
        return 'User(' + self.first_name + self.last_name + ')'