import React from 'react';
import PropTypes from 'prop-types';
import AddComment from '../containers/AddComment';

const ArticleDetail = ({ article }) => (
    <div>
        <ul>
            <li> {article.id} </li>
            <li> {article.articleUrl} </li>
            <li> {article.title} </li>
        </ul>
        <br />

        <AddComment />
        <ul>
            {article.comments.map((comment, index) => (
                    <li> {comment} </li>
            ))}
        </ul>
    </div>
);

ArticleDetail.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        articleUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    }).isRequired
};

export default ArticleDetail;
