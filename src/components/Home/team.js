import React from 'react'
export default (props)=>{
  return(
    <section className="section-block" id="the-team">
      <h1>The team</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <figure>
              <img src={require('../../assets/images/hubro-jørgen.jpg')} alt=""/>
              <figcaption>Jørgen</figcaption>
          </figure>
            </td>
            <td>
              <figure>
              <img src={"https://placehold.it/200x200"} alt=""/>
              <figcaption>Helene</figcaption>
          </figure>
            </td>
            <td>
              <figure>
              <img className="hubro-johannes" src={require('../../assets/images/hubro-johannes.jpg')} alt=""/>
              <figcaption>
                Johannes
              </figcaption>
          </figure>
            </td>
            <td>
              <figure>
              <img src={require('../../assets/images/hubro-eirik.jpg')} alt=""/>
              <figcaption>
                Eirik
              </figcaption>
          </figure>
            </td>
          </tr>
        </tbody>
      </table>
      <article>
        <p>
          We are four students from Norwegian University of Science and Technology in Trondheim, Norway,
          studying Computer Science and Industrial Economics and Technology Management. We have
          been making this application during a course in Software Engineering.
        </p>
      </article>
    </section>
  )
}
