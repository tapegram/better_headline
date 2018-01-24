import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ItemExampleHeaders from './articles/article_item';


class App extends Component {
    render() {
        return (
                <div>
                <button type="button" onClick={this.onClick}>Send GET /articles </button>
                <ItemExampleHeaders />
                </div>
        );
    }

    onClick(ev) {
        console.log("Sending a GET API Call !!!");
        axios.get('http://127.0.0.1:8000/articles/')
            .then(res => {
                console.log(res);
            }).then(response => {
                console.log(JSON.stringify(response));
            });
    }

}

export default App;
