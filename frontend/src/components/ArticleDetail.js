import React from 'react';
import PropTypes from 'prop-types';

const ArticleDetail = ({ article }) => (
        <ul>
        <li> {article.id} </li>
        <li> {article.articleUrl} </li>
        <li> {article.title} </li>
        </ul>
);

ArticleDetail.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        articleUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
        }).isRequired
};

export default ArticleDetail;
