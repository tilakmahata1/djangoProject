from .serialization import RegisterUserSerialization, CreateUserSerialization,UpdateProfileSerialization,ChangePasswordSerialization
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
# accounts/views.py






# Create your views here.


class RegisterUser(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = RegisterUserSerialization

    def post(self, request):
        serializer = RegisterUserSerialization(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(email=email, password=password)
        if user is None:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            # 'user': UserSerializer(user).data
            'email': user.email,
            'username': user.username,
            'is_superuser': user.is_superuser,
        }, status=status.HTTP_200_OK)

class CreateUser(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CreateUserSerialization

    def post(self, request):
        serializer = CreateUserSerialization(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UpdateProfile(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UpdateProfileSerialization

    def get_object(self):
        return self.request.user
    

    


class ChangePassword(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ChangePasswordSerialization

    def get_object(self):
        return self.request.user
# logout


class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get('refresh_token')
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'details' : 'logout successfully'},status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
           return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    
