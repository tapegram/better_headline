from django.db import models


class Article(models.Model):
    article_url = models.URLField(max_length=2000)
    title = models.CharField(max_length=200)


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    text = models.TextField()
