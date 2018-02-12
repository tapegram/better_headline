from django.db import models


class Article(models.Model):
    article_url = models.URLField(max_length=2000)
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Comment(models.Model):
    article = models.ForeignKey(Article,
                                related_name='comments',
                                on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return self.text[:25]
