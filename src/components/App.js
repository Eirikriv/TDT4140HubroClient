
import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import googleLoginPicture from '../assets/signInGoogle.png';
import './App.css';


import gql from 'graphql-tag';

const SignIn = gql`{signIn{url}}`;
class App extends Component {
  render() {
    if (this.props.data.loading){return (<div><h1>Loading ....</h1></div>)}
    return (
      <div className="App">
        <div className="App-header">


        </div>
        <p className="App-intro">
          <a href={this.props.data.signIn.url}>
            <img src={googleLoginPicture} alt=''></img>
          </a>
        </p>
      </div>
    );
  }
}

export default graphql(SignIn)(App);
