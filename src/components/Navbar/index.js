
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
import {updateAuth} from '../../actions/authStatus'
class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.loadHandler = this.loadHandler.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.shouldRefetchAuth.value){
      this.props.data.refetch()
      this.props.updateAuth(false)
    }
    return true
  }
  loadHandler(){
    console.log(this.props);
    if (this.props.data.loading) return <Loader/>
    if (this.props.data.currenUserStatus.status) {
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
    shouldRefetchAuth : state.shouldRefetchAuth,
  }
}
const mapDispatchToProps =(dispatch) =>{
  return bindActionCreators({updateAuth},dispatch)
}

Navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default graphql(LoginStatus)(Navbar)
