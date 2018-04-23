import React from 'react';
import PropTypes from 'prop-types';
import AddComment from '../containers/AddComment';

const ArticleDetail = ({ article, comments }) => (
    <div>
        <ul>
            <li> {article.id} </li>
            <li> {article.articleUrl} </li>
            <li> {article.title} </li>
        </ul>
        <br />

        <AddComment article={article.id}/>
        <ul>
            {comments.map((comment, index) => (
                <ul>
                    <li> {comment.id} </li>
                    <li> {comment.text} </li>
                    <li> {comment.article} </li>
                </ul>
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
                text: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
                article: PropTypes.number.isRequired
            }).isRequired
        ).isRequired
    }).isRequired
};

export default ArticleDetail;
