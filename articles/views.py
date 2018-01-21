from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse

from .models import Article


def index(request):
    if request.method == 'GET':
        return _get_index(request)
    else:
        return _post_index(request)


def _get_index(request):
    articles = Article.objects.all()[:10]
    context = {
        'articles': articles,
    }
    return render(request, 'articles/index.html', context)


def _post_index(request):
    try:
        article = Article(article_url=request.POST['article_url'],
                        title=request.POST['title'])
        article.save()
    except:
        return render(request, 'articles/index.html', {
            'articles': Article.object.all()[:10],
            'error_message': "Failed to submit article",
        })

    return HttpResponseRedirect(reverse('articles:detail',
                                        args=(article.id,)))


def detail(request, article_id):
    article = get_object_or_404(Article, pk=article_id)
    return render(request, 'articles/detail.html', {'article': article})
