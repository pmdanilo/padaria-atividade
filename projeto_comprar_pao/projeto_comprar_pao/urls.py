from django.urls import path
from app_comprar_pao import views

urlpatterns = [
        path('',views.home,name='home'),
]
