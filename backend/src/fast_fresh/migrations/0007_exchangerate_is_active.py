# Generated by Django 3.0.3 on 2020-03-05 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fast_fresh', '0006_merge_20200304_1836'),
    ]

    operations = [
        migrations.AddField(
            model_name='exchangerate',
            name='is_active',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
    ]
