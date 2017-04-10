import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
 background-color: #dddddd;
 type:checkbox;
 width:20px;
 height:20px;
`
export default class Toggle extends React.Component{
  constructor(props){
    super(props)
  }
    render(){
      return(
        <Input type="checkbox" checked ={this.props.checked}/>
      )
    }
  }
