from .models import Article
from rest_framework import serializers


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('article_url',
                  'title',)
