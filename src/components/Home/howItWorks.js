import React from 'react'
export default (props)=>{
  return(<section className="section-block" id="how-it-works">
        <h1>How it works</h1>
        <div>
<table>
    <tbody>
    <tr>
        <td>
            <figure className="how-it-works-figure1">
                <figcaption>Step 1: connect to google calendar</figcaption>
                <div>
                    <img className="googleLogo" src={require('../../assets/images/googleIcon.png')} alt=""/>
                </div>

            </figure>
        </td>
        <td>

            <figure>
                <figcaption>Step 2: scrape relevant platforms</figcaption>
                <div>
                    <img className="itsLogo" src={require('../../assets/images/itslearning_logo.png')} alt=""/>
                </div>

            </figure>
        </td>
    </tr>
    <tr>
        <td>

            <figure className="how-it-works-figure3">
                <figcaption>Step 3: compute optimal solutions for you</figcaption>
                <div>
                    <img className="brainLogo" src={require('../../assets/images/brain-icon-png-15.png')} alt=""/>
                </div>

            </figure>
        </td>
        <td>

            <figure className="how-it-works-figure4">
                <figcaption>Step 4: insert events into your calendar</figcaption>
                <div>
                    <img className="calendarLogo" src={require('../../assets/images/calendarGoogle.jpg')} alt=""/>
                </div>


            </figure>
        </td>
    </tr>
    </tbody>
</table>
        </div>
  </section>)
}
