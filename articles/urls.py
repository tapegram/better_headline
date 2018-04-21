from django.urls import (
    include,
    path,
)
from . import views

app_name = 'articles'

urlpatterns = [
    path('',
         views.ArticleList.as_view()),
    path('<int:pk>/',
         views.ArticleDetail.as_view()),
    path('<int:article_id>/comments',
         views.CommentList.as_view()),
    path('<int:article_id>/comments/<int:pk>',
         views.CommentDetail.as_view()),
    path('rest-auth/',
         include('rest_auth.urls')),
]
