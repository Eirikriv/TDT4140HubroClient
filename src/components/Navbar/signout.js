import React from 'react'
import {SingleLinks} from './utils'
import {gql, graphql} from 'react-apollo'
import {connect} from 'react-redux'

import {updateAuth} from '../../actions/authStatus'
import {bindActionCreators } from 'redux'
const SignOutMutation = gql`mutation{signOut{status studentID}}`
class Signout extends React.Component{
  constructor(props){
    super(props)
    this.handleSignout = this.handleSignout.bind(this)
  }
  handleSignout(){
    this.props.mutate({
      variables:{}
    }
  ).then(({data})=>{
    console.log(this.props)
    this.props.updateAuth(true)
  }).catch((err)=>{
    console.log(err);
  })
  }
    render(){
      return(
        <SingleLinks onClick={this.handleSignout}>
          Signout
        </SingleLinks>
      )
    }
  }

const mapDispatchToProps =(dispatch) =>{
  return bindActionCreators({updateAuth},dispatch)
}

Signout = connect(null,mapDispatchToProps)(Signout)
export default graphql(SignOutMutation)(Signout)
