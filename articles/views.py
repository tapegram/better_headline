from django.views import generic
from django.urls import reverse

from .models import Article


class IndexView(generic.ListView):
    template_name = 'articles/index.html'
    context_object_name = 'articles'

    def get_queryset(self):
        return Article.objects.all()


class CreateView(generic.CreateView):
    model = Article
    fields = ['article_url',
              'title']
    template_name = 'articles/create.html'

    def get_success_url(self):
        return reverse('articles:detail',
                       args=(self.object.id,))


class DetailView(generic.DetailView):
    model = Article
    template_name = 'articles/detail.html'
