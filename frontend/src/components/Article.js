import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Article = ({ onClick, id, articleUrl, title }) => (
    <Link to={`/articles/${id}`}>
        <Item>
            <Item.Content verticalAlign='middle'>
                <Item.Header as='a'> {title} </Item.Header>
                <Item.Description>{articleUrl}</Item.Description>
            </Item.Content>
        </Item>
    </Link>
);

Article.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    articleUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Article;
