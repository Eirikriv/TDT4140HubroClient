import React from 'react'
import {Link} from 'react-router'
import hubroLogo from '../../assets/images/hubroLogo.svg'
export default  (props)=>{
  return(
    <div className="home-icon-section">
      <Link to='/'>
      <img src={hubroLogo}/>
      </Link>
    </div>
  )
}
