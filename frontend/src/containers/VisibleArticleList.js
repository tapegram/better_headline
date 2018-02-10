import { connect } from 'react-redux';
import { viewArticleDetail } from '../actions';
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
        }
    };
};

const VisibleArticleList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleList);

export default VisibleArticleList;
