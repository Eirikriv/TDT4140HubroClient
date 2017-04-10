import React from 'react'
import styled, {keyframes} from 'styled-components'
import colors from '../../assets/colorSchema'
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
background-color:${colors.blue};
border-radius:50%;
animation:${Blink} 1.5s linear 0s infinite;
float:left;
margin:5px;
`
const Dot2 = styled.div`
width:25px;
height:25px;
background-color:${colors.blue};
border-radius:50%;
animation:${Blink} 1.5s linear 0.2s infinite;
float:left;
margin:5px;
`
const Dot3 = styled.div`
width:25px;
height:25px;
background-color:${colors.blue};
border-radius:50%;
animation:${Blink} 1.5s linear 0.4s infinite;
float:left;
margin:5px;
`
const LoadDiv = styled.div`
width: 150px;
height: 50px;
color : ${colors.mainBackground};
`
const Center  = styled.div`
margin-left: 50%
`
export default class DotLoader extends React.Component{
    render(){
      return(
        <Center>

        <LoadDiv>
          <Dot1/>
          <Dot2/>
          <Dot3/>
        </LoadDiv>
      </Center>
      )
    }
  }
