/* This js script implements the the actual home page, divided into different sections. The sections
 * are imported from different js files, located in the same (home) folder. */

import React from 'react'
import HowItWorks from './howItWorks'
import GetStarted from './getStarted'
import Team from './team'
import Welcome from './welcome'
import CoverPhoto from './coverPhoto'



export default  class Home extends React.Component{
  render(){
    return(
      <div className="homePage">
          <CoverPhoto/>
      <div className="homePage-content">
          <Welcome/>
          <GetStarted/>
          <HowItWorks/>
          <Team/>
      </div>
      </div>
    )
  }
}
