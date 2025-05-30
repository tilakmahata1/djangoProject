from django.urls import path
from .views import CategoryList, CategoryDetail, ProductView, ProductDetail, getsingleProductView, postProductView
urlpatterns = [
    path('category/',CategoryList.as_view(), name='category'),
    path('category/<int:pk>', CategoryDetail.as_view(), name="category_detail"),
    path('product/', ProductView.as_view(), name="product_detail"),
    path('product/<int:pk>', ProductDetail.as_view(), name="product_detail"),
]