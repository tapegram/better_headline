import { connect } from 'react-redux';
import ArticleDetail from '../components/ArticleDetail';


const mapStateToProps = (state, ownProps) => {
    return {
        article: state.articles.articles[ownProps.match.params.id]
    };
};

const ArticleDetailContainer = connect(
    mapStateToProps
)(ArticleDetail);

export default ArticleDetailContainer;
