import React from 'react'
import styled from 'styled-components'
import {SingleLinks} from './utils'
import {gql, graphql} from 'react-apollo'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {signout} from '../../actions/authStatus'
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
    console.log('pushing')
    this.props.signout({data})
  }).
  catch((err)=>{
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
  return bindActionCreators({signout},dispatch)
}

Signout = connect(mapDispatchToProps)(Signout)
export default graphql(SignOutMutation)(Signout)
