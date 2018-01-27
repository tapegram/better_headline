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
    return {
        type: RECEIVE_ARTICLES,
        articles: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
}
