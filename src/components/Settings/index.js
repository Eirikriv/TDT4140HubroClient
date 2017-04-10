import React from 'react'
import ImportSettings from './importSettings'
import Outer from '../outerComponent'
export default class Settings extends React.Component{
  render(){
    return(
      <Outer>
        <ImportSettings/>
      </Outer>
    )
  }
}
