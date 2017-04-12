import React from 'react'
import AppBar from 'material-ui/AppBar';
import HomeIcon from './homeIcon'
import PublicElements from './publicElements'
import PrivateElements from './privateElements'
import {Link} from 'react-router'
import {graphql} from 'react-apollo'
import {LoginStatus} from '../../graphql/queries'

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
          iconElementLeft={<Link to='/'><HomeIcon/></Link>}
          title={'Hubro'}
          iconElementRight={this.state.status?<PrivateElements studentId={this.state.studentId}/>:<PublicElements googleLink={this.state.googleLink}/>}
        />
      )
    }
  }
export default graphql(LoginStatus)(Navbar)
