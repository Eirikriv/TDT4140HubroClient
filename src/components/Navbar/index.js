import React from 'react'
import AppBar from 'material-ui/AppBar';
import PublicElements from './publicElements'
import PrivateElements from './privateElements'
import {graphql} from 'react-apollo'
import {LoginStatus} from '../../graphql/queries'
import {bindActionCreators} from 'redux'
import {updateAuth} from '../../actions/authStatus'
import {connect} from 'react-redux'


import HomeSectionIcon from './homeSectionIcon'
class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {status:false, googleLink:'', studentId:'' }
  }


  componentWillReceiveProps(nextProps){

    if(!nextProps.data.loading){
      let data = nextProps.data
      let googleLink = data.googleLink
      let status = data.currenUserStatus.status
      let studentId = data.currenUserStatus.studentID
      this.setState({status,googleLink,studentId})
    }
  }
    render(){

      return(
        <AppBar
          iconElementLeft={<HomeSectionIcon/>}
          title={'Hubro'}
          iconElementRight={this.state.status?<PrivateElements studentId={this.state.studentId} loading={this.props.data.loading}/>:<PublicElements googleLink={this.state.googleLink} loading={this.props.data.loading}/>}
          className="navbar-background"
        />
      )
    }
  }

  const mapDispatchToProps =(dispatch) =>{
    return bindActionCreators({updateAuth},dispatch)
  }
const mapStateToProps =(state)=>{
    return {
      shouldRefetchAuth : state.shouldRefetchAuth,
    }
  }
Navbar = connect(mapStateToProps,mapDispatchToProps)(Navbar)
export default graphql(LoginStatus)(Navbar)
