from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class getProductSerializer(serializers.ModelSerializer):
    # show category name form category id
    category = serializers.ReadOnlyField(source='category.name')
    class Meta:
        model = Product
        fields = [
            'id',
            'title',
            'desc',
            'image',
            'category',
            'isFeatured',
            'isTrending',
            'price',
            'stock',
            'isActive',
        ]

class ProductSerializer(serializers.ModelSerializer):
    # show category name form category id
    # category = serializers.ReadOnlyField(source='category.name')
    class Meta:
        model = Product
        fields = [
            'id',
            'title',
            'desc',
            'image',
            'category',
            'isFeatured',
            'isTrending',
            'price',
            'stock',
            'isActive',
        ]
