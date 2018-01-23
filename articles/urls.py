from django.urls import path

from . import views

app_name = 'articles'

urlpatterns = [
    path('', views.ArticleIndexView.as_view(), name='article_index'),
    path('create/', views.ArticleCreateView.as_view(), name='article_create'),
    path('<int:pk>/', views.ArticleDetailView.as_view(), name='article_detail'),
    path('<int:pk>/create',
         views.CommentCreateView.as_view(),
         name='comment_create'),
]
