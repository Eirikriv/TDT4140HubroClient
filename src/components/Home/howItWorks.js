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
          <img src={require('../../assets/images/calendar-xxl.png')} alt=""/>
          </figure>
        </td>
        <td>

          <figure>
          <figcaption>Step 2: scrape relevant platforms</figcaption>
          <img src={require('../../assets/images/itslearning_logo')} alt=""/>
      </figure>
    </td>
      </tr>
<tr>
<td>

        <figure className="how-it-works-figure3">
          <figcaption>Step 3: compute optimal solutions for you</figcaption>
          <img src={require('../../assets/images/brain-icon-png-15.png')} alt=""/>
        </figure>
      </td>
      <td>

        <figure className="how-it-works-figure4">
          <figcaption>Step 4: insert events into your calendar</figcaption>
          <img src={require('../../assets/images/calendar-xxl.png')} alt=""/>
        </figure>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
        </section>)
}
