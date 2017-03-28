
import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import googleLoginPicture from '../assets/signInGoogle.png';
import './App.css';
import styled from 'styled-components'
import backgroundImage from'../assets/bg.jpeg'

import Navbar from './navbar'

const Outer = styled.div`
text-align: center;
background: url(${backgroundImage})
background-size: cover;
background-repeat: no-repeat;
`;

const WrapperHeader = styled.div`
background-color: #18121E;
height: 150px;
padding: 20px;
color: white;
`;
const StyledUl = styled.ul`
list-style-type: none;
margin-top: 250px;
`
const StyledLi = styled.li`
 margin: 50px 0;
`
const Footer = styled.footer`
position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #18121E;
  text-align: center;
`

import gql from 'graphql-tag';

const SignIn = gql`{signIn{url}}`;
class App extends Component {
  render() {
    if (this.props.data.loading){return (<div><h1>Loading ....</h1></div>)}
    return (
      <Outer>

      <WrapperHeader>
        <Navbar/>
        </WrapperHeader>
        <StyledUl>

          <StyledLi>
            <a href={this.props.data.signIn.url}>
              <img src={googleLoginPicture} alt=''></img>
            </a>
          </StyledLi>
        </StyledUl>

        <Footer>
          <p></p>
        </Footer>
      </Outer>
    );
  }
}

export default graphql(SignIn)(App);
