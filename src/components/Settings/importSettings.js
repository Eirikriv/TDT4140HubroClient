import React from 'react'
import styled from 'styled-components'
import Loader from './loader'
import {gql, graphql} from 'react-apollo'
import  {Table, TR, TD, TH, DIV, TITLE, Input, Outertable} from './utils'

import {PlatformSettings} from './platformSettings'
export const settingsQuery = gql`{user(studentID: "117016280903482792588"){studenSetting{settingsID  itlearning fronter blackboard lectures assignments assignmentlecture }}}`

class ImportSettings extends React.Component{
  constructor(props){
    super(props)
    this.handleLoad = this.handleLoad.bind(this)
  }
  handleLoad(){
    if(this.props.data.loading){ return <Loader/>}
    console.log(this.props.data.user.studenSetting);
    return( <PlatformSettings studenSetting={this.props.data.user.studenSetting}/>)
  }
    render(){
      return(
        <Outertable>
        {this.handleLoad()}
        </Outertable>
      )
    }
  }

  export default graphql(settingsQuery)(ImportSettings)
