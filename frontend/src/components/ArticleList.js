import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles, onArticleClick }) => (
    <ul>
        {articles.map((article, index) => (
            <Article key={index} {...article} onClick={() => onArticleClick(index)} />
        ))}
    </ul>
);

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            articleUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onArticleClick: PropTypes.func.isRequired
};

export default ArticleList;
