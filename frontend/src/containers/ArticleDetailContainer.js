import { connect } from 'react-redux';
import ArticleDetail from '../components/ArticleDetail';


function selectComments(state, article_id){
    const comment_ids = state.articles.article_id_to_comment_id[article_id];
    const comments = [];

    console.log(comment_ids);
    if (comment_ids){
        comment_ids.forEach(function(comment_id){
            console.log(state.articles.comments[comment_id]);
            comments.push(state.articles.comments[comment_id]);
        });
    }

    console.log(comments);
    return comments;
}

const mapStateToProps = (state, ownProps) => {
    return {
        article: state.articles.articles[ownProps.match.params.id],
        comments: selectComments(state,
                                 ownProps.match.params.id)
    };
};

const ArticleDetailContainer = connect(
    mapStateToProps
)(ArticleDetail);

export default ArticleDetailContainer;
