
import React, { Component } from 'react';
import styled from 'styled-components'
import CoverPhoto from './toppCover'
import Outer from './outerComponent'
import Navbar from './navbar'
const Footer = styled.footer`
position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #18121E;
  text-align: center;
`
const BackNav = styled.div`
height: 100px;
width: 100%;
background-color:black;
opacity:0.2;
position:absolute;
top:0px;
left:0px;
z-index:1;
`


class App extends Component {
  render() {
    return (
      <Outer>
        <BackNav/>
        <Navbar/>
        <CoverPhoto/>
        <div height="1000px">
          lorem
        </div>
        <Footer>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Footer>
      </Outer>
    );
  }
}

export default App;
