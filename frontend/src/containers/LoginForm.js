import React from 'react';
import { connect } from 'react-redux';
import { postLogin } from '../actions';

let LoginForm = ({ dispatch }) => {
    let email;
    let password;

    return (
            <div>
            <form
        onSubmit={e => {
            e.preventDefault();

            if (!email.value.trim()) {
                return;
            }
            if (!password.value.trim()) {
                return;
            }

            dispatch(postLogin(email.value,
                               password.value));

            email.value = '';
            password.value = '';
        }}
            >

            <input
                ref={node => {
                    email = node;
                }}
            />
            <input
                ref={node => {
                    password = node;
                }}
            />

            <button type="submit">
                Login
            </button>
            </form>
            </div>
    );
};

LoginForm = connect()(LoginForm);

export default LoginForm;
