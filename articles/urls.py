from django.urls import path

from . import views

app_name = 'articles'

urlpatterns = [
    path('', views.ArticleList.as_view()),
    path('<int:pk>/', views.ArticleDetail.as_view())
]
