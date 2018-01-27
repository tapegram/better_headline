import { combineReducers } from 'redux';
import {
    ADD_ARTICLE,
} from './actions';


function articles(state = [], action) {
    switch (action.type) {
    case ADD_ARTICLE:
        return [
            ...state,
            {
                article_url: action.text,
                title: action.title
            }
        ];
    default:
        return state;
    }
}

const articlesApp = combineReducers({
    articles
});

export default articlesApp;
