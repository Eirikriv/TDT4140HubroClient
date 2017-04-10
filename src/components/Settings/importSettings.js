import React from 'react'
import styled from 'styled-components'
import {graphql} from 'react-apollo'

import {getSettings} from '../../graphql/queries'
import {updateTypeSettings} from '../../graphql/mutations'

import Lines from './typesSettings'
class ImportSettings extends React.Component{
  constructor(props){
    super(props)
    this.handleLoad = this.handleLoad.bind(this)
  }


  handleLoad(){
    if(!this.props.data.loading){
      return <Lines settings={this.props.data.user.studentSettings}/>

    }
  }
    render(){
      return(
        <div>
        <h1>settings</h1>
        {this.handleLoad()}
        </div>
      )
    }
  }


export default graphql(getSettings,{
  options:{
    variables:{
      studentId:"117016280903482792588"
    }
  }
})(ImportSettings)
