import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Article = ({ onClick, articleUrl, title }) => (
    <Item>
        <Item.Content verticalAlign='middle'>
            <Item.Header as='a'> {title} </Item.Header>
            <Item.Description>{articleUrl}</Item.Description>
        </Item.Content>
    </Item>
);

Article.propTypes = {
    onClick: PropTypes.func.isRequired,
    articleUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Article;
