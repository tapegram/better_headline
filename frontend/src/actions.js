import fetch from 'cross-fetch';


/*
 * action types
 */

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const VIEW_ARTICLE_DETAIL = 'VIEW_ARTICLE_DETAIL';
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';

/*
 * action creators
 */

function convertArticleListToMap(articles){
    let article_map = {};

    articles.forEach(function(article) {
        const id = article['id'];
        const articleUrl = article['article_url'];
        const title = article['title'];
        const comments = article['comments'];

        article_map[id] = {
            id: id,
            articleUrl: articleUrl,
            title: title,
            comments: comments
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

function createArticle() {
    return {
        type: CREATE_ARTICLE
    };
}

function createArticleSuccess(json) {
    return {
        type: CREATE_ARTICLE_SUCCESS,
        id: json['id'],
        url: json['article_url'],
        title: json['title']
    };
}

function createComment() {
    return {
        type: CREATE_COMMENT
    };
}

function createCommentSuccess(json) {
    return {
        type: CREATE_COMMENT_SUCCESS,
        id: json['id'],
        text: json['text'],
        article: json['article']
    };
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

export function postArticle(url, title) {
    const data = {
        article_url: url,
        title: title
    };

    return function(dispatch) {
        dispatch(createArticle());
        return fetch('http://127.0.0.1:8000/articles/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
          )
          .then(json =>
            dispatch(createArticleSuccess(json))
          );
    };
}

export function postComment(comment_text, article_id) {
    const data = {
        text: comment_text,
        article: article_id
    };

    return function(dispatch) {
        dispatch(createComment());
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/comments`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
            .then(json =>
                  dispatch(createCommentSuccess(json))
                 );
    };
}
