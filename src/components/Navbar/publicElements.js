import {Link} from 'react-router'
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
        <div>
            <div className="nav-links">
              Login
            </div >
            <div className="nav-links">
              Signup
            </div >
        </div>
      )
    }
    return(
      <div>
        <a href={this.state.googleLink}>
          <div className="nav-links">
            Signup
          </div >
        </a>
        <a href={this.state.googleLink}>
          <div className="nav-links">
            Login
          </div >
        </a>
      </div>
    )
  }
}
export default graphql(LoginStatus)(PublicElements)
