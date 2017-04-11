import React from 'react'
import ImportSettings from './importSettings'
import Timesettings from './timeSettings'
import Outer from '../outerComponent'
export default class Settings extends React.Component{
  render(){
    return(
      <Outer>
        <ImportSettings/>
        <Timesettings/>
      </Outer>
    )
  }
}
