from django.urls import path
from app_comprar_pao import views

urlpatterns = [
    #rota, view responsável, nome de referência
    path('',views.home,name='home'),
]
