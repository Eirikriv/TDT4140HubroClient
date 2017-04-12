import React from 'react'
import ImportSettings from './import/importSettings'
import Timesettings from './time/timeSettings'
import {Outer} from './utils'
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
