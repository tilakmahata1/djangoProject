from django.urls import path
from .views import RegisterUser, LoginView, CreateUser


urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('create/', CreateUser.as_view(), name='create'),
]
