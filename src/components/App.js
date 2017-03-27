
import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import logo from './logo.svg';
import './App.css';


import gql from 'graphql-tag';

const SignIn = gql`{signIn{url}}`;
class App extends Component {
  render() {
    if (this.props.data.loading){return (<div><h1>Loading ....</h1></div>)}
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default graphql(SignIn)(App);
