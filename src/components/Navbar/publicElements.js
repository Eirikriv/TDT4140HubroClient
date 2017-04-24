/* This js script creates the navigation bar's links in the rightmost part of the navigation bar, sign up and login, which redirects
the user to the settings page. */

import React from 'react'
import {graphql} from 'react-apollo'
import {LoginStatus} from '../../graphql/queries'

class PublicElements extends React.Component{
  constructor(props){
    super(props)
    this.state={loading:true}
  }

  componentWillReceiveProps(nextProps){
    let googleLink = nextProps.googleLink
    let loading = nextProps.loading
    this.setState({googleLink,loading})
  }
  render(){
    if(this.state.loading){
      return(
        <ul className="nav-links-container">
            <li className="nav-link">
              <span className="nav-link-not-active">
              Login
              </span>
            </li >
            <li className="nav-link">
              <span className="nav-link-not-active">
              Signup
              </span>
            </li >
        </ul>
      )
    }
    return(
      <ul className="nav-links-container">
        <li className="nav-link">
        <!--THIS IS THE LINK THAT MUST BE CHANGED-->
        <a href={this.state.googleLink}>
          <span>
            Signup
          </span>
        </a>
      </li >
          <li className="nav-link">
            <a href={this.state.googleLink}>
              <span>
            Login
          </span>
            </a>
          </li >
      </ul>
    )
  }
}
export default graphql(LoginStatus)(PublicElements)
