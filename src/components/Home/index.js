import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colorSchema'
import CoverPhoto from './toppCover'
import Outer from '../outerComponent'
import Divider from './divider'
import Welcome from './welcomeComponent'
import GetStarted from './getStarted'
const Quote = styled.div`
color:${colors.textWhite};
max-width:450px;
text-align:center;
font-size: 30px;
padding-top:300px;
position:relative;
float:right;
`
const BigQuote = styled.h1`
color:${colors.mainTextcolor};
font-style: italic;
text-align:center;
`


export default  class Home extends React.Component{
  render(){
    return(
      <Outer>
      <CoverPhoto>
        <Quote>
          Never worry about your assignments again
        </Quote>
      </CoverPhoto>
      <Welcome/>
        <BigQuote>
          "Now I know that I will never forget an assignment again."
        </BigQuote>
        <Divider/>
      <GetStarted/>

    </Outer>
    )
  }
}
