from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='category', blank=True, null=True)

    def __str__(self):
        return f"{self.name} and {self.image}"

class Product(models.Model):
    title = models.CharField(max_length=50)
    desc = models.TextField()
    image = models.ImageField(upload_to='blog', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    isFeatured = models.BooleanField(default=False)
    isTrending = models.BooleanField(default=False)
    price = models.IntegerField()
    stock = models.IntegerField()
    isActive = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    
# class Reviews(models.Model):
#     ratting_choices = [
#         (1, '1'),
#         (2, '2'),
#         (3, '3'),
#         (4, '4'),
#         (5, '5')
#     ]
#     rating = models.IntegerField(choices=ratting_choices)
#     review = models.TextField()
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     blog = models.ForeignKey(Blog, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.review
    
