from .models import Article, Comment
from rest_framework import serializers


class ArticleSerializer(serializers.ModelSerializer):
    comments = serializers.StringRelatedField(many=True)

    class Meta:
        model = Article
        fields = ('id',
                  'article_url',
                  'title',
                  'comments',)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id',
                  'text',
                  'article',)
