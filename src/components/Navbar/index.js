
import React from 'react'
import {gql, graphql} from 'react-apollo'
import {OuterNavbar, Logo, Logotext, Home, LinksContainer} from './utils'
import Loader from './loader'
import UserLinks from './userLinks'
import PublicLinks from './publicLinks'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signin} from '../../actions/authStatus'
const LoginStatus = gql`{currenUserStatus{status studentID}googleLink}`

class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.loadHandler = this.loadHandler.bind(this);
  }
  loadHandler(){
    console.log(this.props.authStatus);
    if (this.props.data.loading) return <Loader/>
    if (this.props.data.currenUserStatus.status && this.props.authStatus) {
      this.props.signin(this.props.data.currenUserStatus)
      return <UserLinks studentID={this.props.data.currenUserStatus.studentID}/>
    }
    return <PublicLinks googleLink={this.props.data.googleLink}/>
  }

  render(){
    return (
        <OuterNavbar>
          <Home>
              <Logo></Logo>
              <Logotext>
                Hubro
              </Logotext>
          </Home>
          {this.loadHandler()}
        </OuterNavbar>
    )
  }
}
const mapStateToProps =(state)=>{
  return {
    authStatus : state.auth.status,
    authId : state.auth.status
  }
}
const mapDispatchToProps =(dispatch) =>{
  return bindActionCreators({signin},dispatch)
}

Navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default graphql(LoginStatus)(Navbar)
