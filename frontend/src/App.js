import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
                <div>
                <button type="button" onClick={this.onClick}>Send GET /articles </button>
                </div>
        );
    }

    onClick(ev) {
        console.log("Sending a GET API Call !!!");
        axios.get('/articles')
            .then(res => {
                console.log(res.json);
            }).then(response => {
                console.log(JSON.stringify(response));
            });
    }

}

export default App;
