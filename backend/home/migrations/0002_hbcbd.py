# Generated by Django 3.2.25 on 2024-08-23 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("home", "0001_load_initial_data"),
    ]

    operations = [
        migrations.CreateModel(
            name="Hbcbd",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("bvbfjf", models.BigIntegerField()),
                ("ryeue", models.BigIntegerField()),
            ],
        ),
    ]
