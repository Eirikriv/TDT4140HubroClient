import colors from '../../assets/colorSchema'
import styled from 'styled-components'
import React from 'react'
import Divider from './divider'
import Title from './title-component'
import logo from '../../assets/images/hubroLogo.svg'
import Paragraph from './paragraph'
const Outer = styled.div`
background-color:${colors.compBackground};
height:100%;
width: 100%;
`
const WelcomeTag = styled.div`
widt:100%;
height:46vh;
background-color:${colors.mainBackground};
`
const ImageDiv = styled.div`
width:50%;
height: 100%;
float:left;
`

const Logo = styled.div`
background-image: url(${logo});
background-repeat: no-repeat;
width:80%;
height:80%;
margin-right: 5px;
margin-left: auto;
margin-top: 60px;
`

const TextDiv = styled.div`
width:50%;
height: 100%;
float:right;
`



export default class Welcome extends React.Component{
  render(){
    return(
      <Outer>
	    <Divider/>
        <WelcomeTag>
          <ImageDiv>
            <Logo/>
          </ImageDiv>
          <TextDiv>
            <Title>
              Welcome to Hubro
            </Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </TextDiv>
        </WelcomeTag>
     </Outer>
    )
  }
}
