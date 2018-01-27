/*
 * action types
 */

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const VIEW_ARTICLE_DETAIL = 'VIEW_ARTICLE_DETAIL';

/*
 * action creators
 */

export function addArticle(text) {
    return { type: ADD_ARTICLE, text };
}

export function viewArticleDetail(index) {
    return { type: VIEW_ARTICLE_DETAIL, index };
}
