from django.shortcuts import get_object_or_404
from django.views import generic
from django.urls import reverse

from .models import (
    Article,
    Comment,
)


class ArticleIndexView(generic.ListView):
    template_name = 'articles/index.html'
    context_object_name = 'articles'

    def get_queryset(self):
        return Article.objects.all()


class ArticleCreateView(generic.CreateView):
    model = Article
    fields = ['article_url',
              'title']
    template_name = 'articles/create.html'

    def get_success_url(self):
        return reverse('articles:article_detail',
                       args=(self.object.id,))


class ArticleDetailView(generic.DetailView):
    model = Article
    template_name = 'articles/detail.html'


class CommentCreateView(generic.CreateView):
    model = Comment
    fields = ['text']
    template_name = 'articles/comments/create.html'

    def get_success_url(self):
        return reverse('articles:article_detail',
                       args=(self.object.article_id,))

    def dispatch(self, request, *args, **kwargs):
            """
            Overridden so we can make sure the `Article` instance exists
            before going any further.
            """
            self.article = get_object_or_404(Article, pk=kwargs['pk'])
            return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        """
        Overridden to add the Article relation to the `Comment` instance.
        """
        form.instance.article = self.article
        return super().form_valid(form)
