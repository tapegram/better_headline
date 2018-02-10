import fetch from 'cross-fetch';


/*
 * action types
 */

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const VIEW_ARTICLE_DETAIL = 'VIEW_ARTICLE_DETAIL';
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

/*
 * action creators
 */

function convertArticleListToMap(articles){
    let article_map = {};

    articles.forEach(function(article) {
        const id = article['id'];
        const articleUrl = article['article_url'];
        const title = article['title'];

        article_map[id] = {
            id: id,
            articleUrl: articleUrl,
            title: title
        };
    });

    return article_map;
}

function convertArticleListToIDs(articles){
    return articles.map(article => article['id']);
}

export function addArticle(url, title) {
    return { type: ADD_ARTICLE,
             url: url,
             title: title };
}

export function viewArticleDetail(index) {
    return { type: VIEW_ARTICLE_DETAIL, index };
}

function requestArticles() {
    return {
        type: REQUEST_ARTICLES
    };
}

function receiveArticles(json) {
    let articlesList = json;
    return {
        type: RECEIVE_ARTICLES,
        article_ids: convertArticleListToIDs(articlesList),
        articles: convertArticleListToMap(articlesList),
        receivedAt: Date.now()
    };
}

export function fetchArticles() {
  return function (dispatch) {
    dispatch(requestArticles());
    return fetch('http://127.0.0.1:8000/articles/')
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json =>
            dispatch(receiveArticles(json))
        );
  };
}
