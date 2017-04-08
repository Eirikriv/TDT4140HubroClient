
import React, { Component } from 'react';
import styled from 'styled-components'
import Outer from './outerComponent'
import Navbar from './navbar'
import BehindNavSolid from './topBehindNav'
import colors from '../assets/colorSchema'

import Home from './Home/index'
const BackNav = styled.div`
height: 7vh;
width: 100%;
background-color:#093457;
opacity:0.8;
position:fixed;
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
        <BehindNavSolid/>
        {this.props.children}
	</Outer>
    )
  }
}

export default App;
