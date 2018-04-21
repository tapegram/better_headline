import { combineReducers } from 'redux';
import {
    ADD_ARTICLE,
    RECEIVE_ARTICLES,
    REQUEST_ARTICLES,
    CREATE_ARTICLE,
    CREATE_ARTICLE_SUCCESS,
    CREATE_COMMENT,
    CREATE_COMMENT_SUCCESS,
} from './actions';


function articles(
    state = {
        articles: {}
    },
    action
) {
    switch (action.type) {
    case ADD_ARTICLE:
        return Object.assign({}, state, {
            articles: state.articles.set(1,
                                         {id: 1,
                                          articleUrl: action.url,
                                          title: action.title})
        });
    case REQUEST_ARTICLES:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
    case RECEIVE_ARTICLES:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            article_ids: action.article_ids,
            articles: action.articles,
            lastUpdated: action.receivedAt
        });
    case CREATE_ARTICLE:
        return Object.assign({}, state, {
            isCreatingArticle: true
        });
    case CREATE_ARTICLE_SUCCESS:
        const article_id = action.id;
        return Object.assign({}, state, {
            isCreatingArticle: false,
            article_ids: state.article_ids.concat(action.id),
            articles: Object.assign({}, state.articles, {
                article_id: {
                    id: article_id,
                    articleUrl: action.url,
                    title: action.title
                }})
            });
    case CREATE_COMMENT:
        return Object.assign({}, state, {
            isCreatingComment: true
        });
    case CREATE_COMMENT_SUCCESS:
        const article = action.article;
        const existing_article = state.articles[article];
        const new_comment = {
            id: action.id,
            text: action.text,
            article: action.article
        };

        return {
            ...state,
            isCreatingComment: false,
            articles: {
                ...state.articles,
                [article]: {
                    ...state.articles[article],
                    comments: existing_article.comments.concat(new_comment)
                }
            }
        };
    default:
        return state;
        }
}

const articlesApp = combineReducers({
    articles
});

export default articlesApp;
