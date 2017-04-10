import React from 'react'
import styled from 'styled-components'
import personDefault from '../../assets/images/personDefault.svg'
import {gql, graphql} from 'react-apollo'
import {SingleLinks, LinksContainer} from './utils'
import Signout from './signout'
import {Link} from 'react-router'
const UserQuery = gql`query UserQuery($studentID: String!){user(studentID:$studentID){studentName profilePictureUrl}}`

 class UserLinks extends React.Component{
    constructor(props){
      super(props)
      this.loadHandler=this.loadHandler.bind(this)
    }
loadHandler(){
  if(!this.props.data.loading){
    const Profile = styled.div`
    background-image:url(${this.props.data.user.profilePictureUrl});
    background-repeat: no-repeat;
    border-radius:50%
    height:50px;
    width:50px;
    float:right;
    margin-top:10px;
    `
    return(
      <LinksContainer>
        <Link to='/user/settings'>
      <Profile/>
    </Link>
      <Signout/>
      <SingleLinks>
      Blog
      </SingleLinks>
        </LinksContainer>
    )
  }else{
    <LinksContainer/>
  }
}

    render(){
       return(
        <LinksContainer>
        {this.loadHandler()}
        </LinksContainer>
      )
    }
  }
export default graphql(UserQuery,{
  options: (props) => { return { variables: { studentID: props.studentID } } }
})(UserLinks)

// <Profile/>
// <SingleLinks>
// Sign out
// </SingleLinks>
// <SingleLinks>
// Blog
// </SingleLinks>
