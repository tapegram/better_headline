import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';

let AddArticle = ({ dispatch }) => {
    let input;

    return (
            <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addArticle(input.value));
                    input.value = '';
                }}
            >
            <input
                ref={node => {
                    input = node;
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
