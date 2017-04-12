import React from 'react'
import AppBar from 'material-ui/AppBar';
import HomeIcon from './homeIcon'
import PublicElements from './publicElements'
import PrivateElements from './privateElements'
import {Link} from 'react-router'
import {graphql} from 'react-apollo'
import {LoginStatus} from '../../graphql/queries'
import {bindActionCreators} from 'redux'
import {updateAuth} from '../../actions/authStatus'
import {connect} from 'react-redux'

class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {status:false, googleLink:'', studentId:'' }
  }

  componentWillReceiveProps(nextProps){
    // if(nextProps.shouldRefetchAuth){
    //   this.props.data.refetch()
    //   this.props.updateAuth(false)
    // }
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
          iconElementLeft={<Link to='/'><HomeIcon/></Link>}
          title={'Hubro'}
          iconElementRight={this.state.status?<PrivateElements studentId={this.state.studentId} loading={this.props.data.loading}/>:<PublicElements googleLink={this.state.googleLink} loading={this.props.data.loading}/>}
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
