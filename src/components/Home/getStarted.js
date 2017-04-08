import styled from 'styled-components'
import React from 'react'
import Outer from '../outerComponent'
import colors from '../../assets/colorSchema'
import Title from './title-component'
import Paragraph from './paragraph'
import btnGoogle from '../../assets/images/btnGoogle.svg'
import btnG from '../../assets/images/gbtn.png'

const GetStartedTag = styled.div`
widt:100%;
height:40vh;
background-color:${colors.mainBackground};
margin-left: 80px;
`

const Div = styled.div`
width:50%;
height: 100%;
margin:auto;
text-align:center;
`
const RightDiv = styled.div`
width:50%;
height: 100%;
float:right;
`
const GBtn = styled.div`
width:100%;
height: 100%;
margin-left:25%
border-radius: 4px;
color: black;
background-image: url(${btnG});
background-repeat: no-repeat;
background-image:${colors.textWhite};
`

const TitleC = styled.div`
font-style:italic;
font-size: 60px;
color : ${colors.hubroYellow};
text-align: center;
margin-top:40px;
`

const ParagraphC = styled.p`
text-align: center;
font-size: 30px;
color : ${colors.mainTextcolor};
padding-right: 50px;
font-family: Helvetica;
`


export default class GetStarted extends React.Component{
  render(){
    return(
      <Outer>
        <GetStartedTag>
<Div>
  <TitleC >
    Get Started
  </TitleC>

<ParagraphC>
  Since Hubro is gathering information directly from your google calendar, and inserting events into it, the first thing you need to do is sign in with google. you will then get to your settings page, where you can set your preferences.
</ParagraphC>
<GBtn>
</GBtn>
</Div>

        </GetStartedTag>
      </Outer>
    )
  }
}
