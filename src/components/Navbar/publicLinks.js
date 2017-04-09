import React from 'react'
import styled from 'styled-components'
import {SingleLinks, LinksContainer} from './utils'
  export default class PublicLinks extends React.Component{
    constructor(props) {
    super(props);
  }
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
