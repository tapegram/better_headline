import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import articleApp from './reducers';
import App from './App';
import { fetchArticles } from './actions';


const loggerMiddleware = createLogger();
const middleware = applyMiddleware(thunkMiddleware,
                                   loggerMiddleware);

let store = createStore(
    articleApp,
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

render(
        <Provider store={store}>
        <App />
        </Provider>,
    document.getElementById('root')
);

store.dispatch(fetchArticles())
    .then(() => console.log(store.getState()));
