from django.shortcuts import render
from rest_framework import generics
from .models import  Page
from .serializer import PageSerializer


class restAPI(generics.ListAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer