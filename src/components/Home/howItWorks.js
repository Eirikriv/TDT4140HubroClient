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
          <img src={"https://placehold.it/350x150"} alt=""/>
          </figure>
        </td>
        <td>

          <figure>
          <figcaption>Step 2: scrape relevant platforms</figcaption>
          <img src={"https://placehold.it/350x150"}/>
      </figure>
    </td>
      </tr>
<tr>
<td>

        <figure className="how-it-works-figure3">
          <figcaption>Step 3: compute optimal solutions for you</figcaption>
          <img src={"https://placehold.it/350x150"}/>
        </figure>
      </td>
      <td>

        <figure className="how-it-works-figure4">
          <figcaption>Step 4: insert events into your calendar</figcaption>
          <img src={"https://placehold.it/350x150"}/>
        </figure>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
        </section>)
}
