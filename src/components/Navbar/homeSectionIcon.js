/* This js script creates the navigation bar's Hubro icon in the leftmost part of the navbar. */

import React from 'react'
import {Link} from 'react-router'
import hubroLogo from '../../assets/images/hubroLogo.svg'
export default  (props)=>{
  return(
    <nav className="home-icon-section">
      <Link to='/'>
      <img src={hubroLogo} alt=""/>
      </Link>
    </nav>
  )
}
