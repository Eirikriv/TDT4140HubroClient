import React from 'react'
import hubroLogo from '../../assets/images/hubroLogo.svg'
export default (props)=>{
  return(
    <section className="section-block" id="welcome">
        <div className="welcome-right">
      <h1 className="section-title">Welcome to Hubro!</h1>
      <article>
        <p> Hubro is the application that makes your life as a student easier. It automates your planning
            process and breaks big assignments into comprehensive work units. This leads to an even workload
            throughout the semester, and you’ll never have the problem of underestimating work load ever again.
            Through web scraping, Hubro fetches exercises and lecture times from Its Learning and plans your
            week in detail. Based on your preferences, Hubro will adjust your schedule so you stay on track
            according to your goals.
        </p>
      </article>
    </div>
          <div className="welcome-left">
          <img className="big-hubro-logo" id="welcome-logo" src={hubroLogo} alt=""></img>
        </div>
  </section>)
}
