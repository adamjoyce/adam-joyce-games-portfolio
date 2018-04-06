from django.urls import path

from . import views

urlpatterns = [
    path('', views.contact, name='contact'),
    path('submitted/', views.submitted, name='submitted')
]
