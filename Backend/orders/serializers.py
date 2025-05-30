from rest_framework import serializers
from .models import Order, OrderItem
from products.models import Product 
from decimal import Decimal 

class ProductLiteSerializer(serializers.ModelSerializer):
    """Serializer for basic product info within OrderItem"""
    class Meta:
        model = Product
        fields = ['id', 'title', 'price', 'image'] 

class OrderItemSerializer(serializers.ModelSerializer):
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), source='product', write_only=True
    )
    product_title = serializers.CharField(source='product.title', read_only=True)
    product_price = serializers.DecimalField(source='product.price', read_only=True, max_digits=10, decimal_places=2)
    product_image = serializers.ImageField(source='product.image', read_only=True) # Assuming image is an ImageField
    item_total = serializers.DecimalField(read_only=True, max_digits=10, decimal_places=2)

    class Meta:
        model = OrderItem
        fields = [
            'id', 
            'product_id', 
            'product_title', 
            'product_price', 
            'product_image', 
            'quantity',
            'item_total' 
        ]


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault()) # Set user automatically
    total_amount = serializers.DecimalField(read_only=True, max_digits=10, decimal_places=2) # Add total amount

    class Meta:
        model = Order
        fields = [
            'id',
            'user', 
            'items',
            'payment_method',
            'payment_status',
            'created_at',
            'khalti_pidx', 
            'shipping_address',
            'shipping_city',
            'shipping_state',
            'shipping_zip',
            'shipping_country',
            'shipping_phone',
            'billing_address',
            'total_amount', 
        ]
        read_only_fields = [
            'id',
            'khalti_pidx', 
            'created_at',
            'payment_status',
            'user',
            'total_amount'
        ]

    def create(self, validated_data):
        items_data = validated_data.pop('items', [])

        order = Order.objects.create(**validated_data)

        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)

        return order

    def validate_items(self, value):
        if not value:
            raise serializers.ValidationError("Order must contain at least one item.")
        return value

    def validate_payment_method(self, value):
        if value not in dict(Order.PAYMENT_METHOD_CHOICES):
             raise serializers.ValidationError(f"Invalid payment method '{value}'.")
        return value