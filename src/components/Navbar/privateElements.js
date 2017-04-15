import {Link} from 'react-router'
import React from 'react'
import defaultAvatar from '../../assets/images/defaultAvatar.png'
import Avatar from 'material-ui/Avatar'

import {SignOutMutation} from '../../graphql/mutations'
import {graphql} from 'react-apollo'
import {UserQuery, LoginStatus} from '../../graphql/queries'
import {bindActionCreators} from 'redux'
import {updateAuth} from '../../actions/authStatus'
import {connect} from 'react-redux'

class PrivateElements extends React.Component{
  constructor(props){
    super(props)
    let studentId = props.studentId
    this.state = {studentId, profilePictureUrl:defaultAvatar, studentName:''}
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.data.loading){
      let user = nextProps.data.user
      let profilePictureUrl = user.profilePictureUrl
      let studentName = user.studentName
      this.setState({profilePictureUrl,studentName})
      this.handleSignout = this.handleSignout.bind(this)
    }
  }
  handleSignout(event){
    this.props.mutate({
      refetchQueries:[{query:LoginStatus}]
    }
    ).then(({data})=>{
      this.props.updateAuth(true)
    })
  }
  render(){
    return(
      <ul className="nav-links-container">
  <li className="nav-link-special">
      <Avatar src={this.state.profilePictureUrl} className="nav-avatar"/>
    </li>
  <li className="nav-link" onClick={this.handleSignout}>
      <span>
        Sign out
      </span>
      </li >
  <li className="nav-link">
        <Link to='/dashboard'>
        Dashboard
    </Link>
  </li>
  </ul>

    )
  }
}

const mapDispatchToProps =(dispatch) =>{
  return bindActionCreators({updateAuth},dispatch)
}

PrivateElements = connect(null,mapDispatchToProps)(PrivateElements)

PrivateElements = graphql(SignOutMutation)(PrivateElements)
export default graphql(UserQuery,{
  options: (props) => { return { variables: { studentID: props.studentId } } }
})(PrivateElements)
