import React from 'react'
import Time from './timeSettings.js'

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
