import React from 'react'
import hubroLogo from '../../assets/images/hubroLogo.svg'
export default (props)=>{
  return(
    <section className="section-block" id="welcome">
        <div className="welcome-right">
      <h1 className="section-title">Welcome to Hubro!</h1>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </article>
    </div>
          <div className="welcome-left">
          <img className="big-hubro-logo" id="welcome-logo" src={hubroLogo}></img>
        </div>
  </section>)
}
