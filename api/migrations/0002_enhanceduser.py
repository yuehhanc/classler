# Generated by Django 2.0.3 on 2019-07-02 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='EnhancedUser',
            fields=[
                ('user_id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('photo_url', models.CharField(blank=True, max_length=100)),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=20)),
                ('email', models.EmailField(blank=True, max_length=50)),
                ('authToken', models.CharField(max_length=200)),
                ('provider', models.CharField(max_length=15)),
                ('created_time', models.DateTimeField()),
                ('updated_time', models.DateTimeField()),
                ('authorization_level', models.IntegerField(default=0)),
            ],
        ),
    ]
