import React from 'react'
import styled from 'styled-components'
import hubroLogo from '../assets/images/hubroLogo.svg'
import personDefault from '../assets/images/personDefault.svg'
import colors from '../assets/colorSchema'

const  OuterNavbar = styled.div`
height: 100px;
width: 100%;
position:fixed;
top:0px;
left:0px;
z-index:5;
opacity:100%;
`
const Home = styled.div`
width: 30%;
height: 100%;
float:left
`
const Logo = styled.div`
background-image: url(${hubroLogo});
background-repeat: no-repeat;
width: 50px;
height:50px;
margin: 10px;
float:left;
`
const Logotext = styled.div`
color:${colors.hubroYellow};
margin-top:20px;
float:left;
font-size:30px;
font-family: "Helvetica light", Helvetica;
`
const LinksContainer = styled.div`
width:20%;
height:100%;
float:right;
`
const SingleLinks = styled.div`
margin:20px;
color:${colors.textWhite};
font-size:20px;
font-family: "Helvetica light", Helvetica;
float:right;
`
const Profile = styled.div`
background-image:url(${personDefault});
background-repeat: no-repeat;
height:50px;
width:50px;
float:right;
margin-top:20px;
`
const isAuthenticated = true
const UserLinks=(
  <LinksContainer>
    <Profile/>
    <SingleLinks>
      Sign out
    </SingleLinks>
    <SingleLinks>
      Blog
    </SingleLinks>
</LinksContainer>
)
const PublicLinks = (
  <LinksContainer>
    <SingleLinks>
      Sign in
    </SingleLinks>
    <SingleLinks>
      Sign up
    </SingleLinks>
    <SingleLinks>
      Blog
    </SingleLinks>
</LinksContainer>
)
export default class Navbar extends React.Component{
  render(){
    return (

        <OuterNavbar>
          <Home>
              <Logo></Logo>
              <Logotext>
                Hubro
              </Logotext>
          </Home>
            {isAuthenticated?UserLinks:PublicLinks}


        </OuterNavbar>
    )
  }
}
