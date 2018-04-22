import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    viewArticleDetail,
    fetchArticles,
} from '../actions';
import ArticleList from '../components/ArticleList';


const mapStateToProps = state => {
    return {
        articles: Object.values(state.articles.articles)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onArticleClick: id => {
            dispatch(viewArticleDetail(id));
        },
        fetchArticles: () => {
            dispatch(fetchArticles());
        }
    };
};

class Wrapper extends Component {
    componentDidMount() {
		    this.props.fetchArticles();
	  }

	  render() {
		    return (<ArticleList
                    articles={this.props.articles}
                    onArticleClick={this.props.onArticleClick} />
	  )}
}
const VisibleArticleList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Wrapper);

export default VisibleArticleList;
