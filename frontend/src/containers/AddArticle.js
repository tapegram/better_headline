import React from 'react';
import { connect } from 'react-redux';
import { postArticle } from '../actions';

let AddArticle = ({ dispatch }) => {
    let article_url;
    let article_title;

    return (
            <div>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    if (!article_url.value.trim()) {
                        return;
                    }
                    if (!article_title.value.trim()) {
                        return;
                    }

                    dispatch(postArticle(article_url.value,
                                         article_title.value));

                    article_url.value = '';
                    article_title.value = '';
                }}
            >
            <input
                ref={node => {
                    article_url = node;
                }}
            />
                <input
            ref={node => {
                article_title = node;
            }}
            />
            <button type="submit">
                Add Article
            </button>
            </form>
            </div>
    );
};

AddArticle = connect()(AddArticle);

export default AddArticle;
