from django.urls import path
from .views import RegisterUser, LoginView, CreateUser,UpdateProfile,ChangePassword,Logout


urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('create/', CreateUser.as_view(), name='create'),
    path('updateprofile/', UpdateProfile.as_view(), name='updateprofile'),
    path('changepassword/', ChangePassword.as_view(), name='changepassword'),
    path('logout/', Logout.as_view(), name='logout'),
]
