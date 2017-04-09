import React from 'react'
import styled, {keyframes} from 'styled-components'
import hubroLogo from '../assets/images/hubroLogo.svg'
import personDefault from '../assets/images/personDefault.svg'
import colors from '../assets/colorSchema'
import {gql, graphql} from 'react-apollo'
const LoginStatus = gql`{currenUserStatus{status studentID}}`
const  OuterNavbar = styled.div`
height: 7vh;
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
width:50%;
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
const Blink = keyframes`
0% {
  opacity: .2;
}
20% {
  opacity: 1;
}
100% {
  opacity: .2;
}
}
`
const Dot1 = styled.div`
width:25px;
height:25px;
background-color:white;
border-radius:50%;
animation:${Blink} 1.5s linear 0s infinite;
float:left;
margin:5px;
`
const Dot2 = styled.div`
width:25px;
height:25px;
background-color:white;
border-radius:50%;
animation:${Blink} 1.5s linear 0.2s infinite;
float:left;
margin:5px;
`
const Dot3 = styled.div`
width:25px;
height:25px;
background-color:white;
border-radius:50%;
animation:${Blink} 1.5s linear 0.4s infinite;
float:left;
margin:5px;
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
const LoadDiv = styled.div`
width: 150px;
height: 50px;
color : white;
`

const Loading = (
  <LoadDiv>
    <Dot1/>
    <Dot2/>
    <Dot3/>
  </LoadDiv>
)
class Navbar extends React.Component{
  render(){
    return (
        <OuterNavbar>
          <Home>
              <Logo></Logo>
              <Logotext>
                Hubro
              </Logotext>
          </Home>
          <LinksContainer>
          {this.props.data.loading?Loading:(this.props.data.currenUserStatus.status?UserLinks:PublicLinks)}
        </LinksContainer>
        </OuterNavbar>
    )
  }
}

export default graphql(LoginStatus)(Navbar)
