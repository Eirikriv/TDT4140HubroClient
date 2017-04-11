import React from 'react'
import {SingleLinks, LinksContainer} from './utils'
  export default class PublicLinks extends React.Component{
  
    render(){
      return(
        <LinksContainer>
          <a href={this.props.googleLink}>
          <SingleLinks>
            Sign in
          </SingleLinks>
        </a>
          <a href={this.props.googleLink}>
            <SingleLinks>
              Sign up
            </SingleLinks>
          </a>
          <SingleLinks>
            Blog
          </SingleLinks>
        </LinksContainer>

      )
    }
  }
