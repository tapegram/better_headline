from django.test import TestCase
from django.urls import reverse

from .models import Article


class TestArticleIndex(TestCase):

    def test_no_articles(self):
        """
        If no articles exist, an appropriate message is displayed.
        """
        response = self.client.get(reverse('articles:article_index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'No articles are available.')
        self.assertQuerysetEqual(response.context['articles'], [])

    def test_display_articles(self):
        """
        If any articles exist, display them.
        """

        article = Article(article_url="https://fakewebsite.test",
                          title="Test Article")
        article.save()

        response = self.client.get(reverse('articles:article_index'))
        self.assertQuerysetEqual(
            response.context['articles'],
            ['<Article: Test Article>']
        )


class TestArticleDetail(TestCase):

    def test_article(self):
        """
        The detail view of an article
        """

        article = Article(article_url="https://fakewebsite.test",
                          title="Test Article")
        article.save()

        url = reverse('articles:article_detail', args=(article.id,))
        response = self.client.get(url)

        self.assertContains(response, article.title)
        self.assertContains(response, article.article_url)


class TestArticleCreate(TestCase):

    def test_create(self):
        """
        Test getting the create view form
        """
        url = reverse('articles:article_create')
        response = self.client.get(url)

        self.assertContains(response, 'id="id_article_url"')
        self.assertContains(response, 'id="id_title"')


class TestCommentCreate(TestCase):

    def test_create(self):
        """
        Test getting the create view form
        """
        article = Article(article_url="https://fakewebsite.test",
                          title="Test Article")
        article.save()

        url = reverse('articles:comment_create', args=(article.id,))
        response = self.client.get(url)

        self.assertContains(response, 'id="id_text"')
