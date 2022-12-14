from turtle import update
from venv import create
from django.db import models

# Create your models here.

class Product(models.Model):
    name: models.CharField(max_length=120)
    logo: models.ImageField(upload_to='products', default='no_picture.png')
    price = models.FloatField(help_text='in US dollar')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"{self.price}-{self.created.strftime('%d/%m/%Y')}"