import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions';

let AddComment = ({ dispatch }) => {
    let comment_text;
    let article_id;

    return (
            <div>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    if (!comment_text.value.trim()) {
                        return;
                    }
                    if (!article_id.value.trim()) {
                        return;
                    }

                    dispatch(postComment(comment_text.value,
                                         article_id.value));

                    comment_text.value = '';
                    article_id.value = '';
                }}
            >
            <input
                ref={node => {
                    comment_text = node;
                }}
            />
            <input
                ref={node => {
                    article_id = node;
                }}
            />
            <button type="submit">
                Add Comment
            </button>
            </form>
            </div>
    );
};

AddComment = connect()(AddComment);

export default AddComment;
