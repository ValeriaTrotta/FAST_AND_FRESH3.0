# Generated by Django 3.0.3 on 2020-03-06 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fast_fresh', '0011_paymentmethod_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='exchangerate',
            name='is_active',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
    ]
