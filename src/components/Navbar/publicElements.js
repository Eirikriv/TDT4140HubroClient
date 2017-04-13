import {Link} from 'react-router'
import React from 'react'
import {SingleLinks} from './utils'
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
        <div>
            <SingleLinks>
              Login
            </SingleLinks>
            <SingleLinks>
              Signup
            </SingleLinks>
        </div>
      )
    }
    return(
      <div>
      <Link to='/blogg'>
        <SingleLinks>
          Blogg
        </SingleLinks>
      </Link>
        <a href={this.state.googleLink}>
          <SingleLinks>
            Signup
          </SingleLinks>
        </a>
        <a href={this.state.googleLink}>
          <SingleLinks>
            Login
          </SingleLinks>
        </a>
      </div>
    )
  }
}
export default graphql(LoginStatus)(PublicElements)
