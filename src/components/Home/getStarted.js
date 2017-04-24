/* This js script creates the webpages get started section, with heading, text and sign
   in with google button */

import React from 'react'
export default (props)=>{
  return(
    <section className="section-block" id="get-started">
    <h1 >Get started</h1>
      <article>
        <p>Hubro is gathering information about free and busy spots in your schedule directly from your
          google calendar, and later inserting events into it. Therefore the first thing you need to do
          is sign in with google. You will then get to your settings page, where you can set your import
          and time prefernces.
        </p>
      </article>
      <a href = "https://accounts.google.com/o/oauth2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar&response_type=code&client_id=82575189460-qsqfcpmenbna11tdup9rval3oi78trlj.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Fapi.v1.hubro.tech%2Fauth%2Foauth2callback">
      <img className="loginGoogle" src={require('../../assets/images/sign-in-with-google.png')} alt="login"/>
      </a>
  </section>)
}
