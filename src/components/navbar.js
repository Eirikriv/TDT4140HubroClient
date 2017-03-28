import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'

const ProfilePicture = styled.div`
display: inline-block;
  width: 100px;
	height: 100px;
	border-radius: 50px;
	background: url(https://placehold.it/350x350) no-repeat;
`
const NavbarLoggedIn = styled.div`
 display: inline-block;
list-style-type: none;
vertical-align: middle;
`
export default class Navbar extends React.Component{
  render(){
    return(
      <NavbarLoggedIn>
    <ProfilePicture/>
    <h4>
      <Link to="/home">  Johannes Z. Vollan</Link>

    </h4>
    </NavbarLoggedIn>

    )
  }
}
