import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import ArticleDetailContainer from '../containers/ArticleDetailContainer';


const Root = ({ store }) => (
        <Provider store={store}>
        <Router>
        <div>
            <Route exact path="/articles" component={App} />
            <Route path="/articles/:id" component={ArticleDetailContainer} />
        </div>
        </Router>
        </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
