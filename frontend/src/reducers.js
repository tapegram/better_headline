import { combineReducers } from 'redux';
import {
    ADD_ARTICLE,
    RECEIVE_ARTICLES,
    REQUEST_ARTICLES,
    CREATE_ARTICLE,
    CREATE_ARTICLE_SUCCESS,
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
    default:
        return state;
        }
}

const articlesApp = combineReducers({
    articles
});

export default articlesApp;
