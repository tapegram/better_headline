import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions';

let AddComment = ({ dispatch, article }) => {
    let comment_text;

    return (
            <div>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    if (!comment_text.value.trim()) {
                        return;
                    }

                    dispatch(postComment(comment_text.value,
                                         article));

                    comment_text.value = '';
                }}
            >
            <input
                ref={node => {
                    comment_text = node;
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
