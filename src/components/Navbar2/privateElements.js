import {Link} from 'react-router'
import React from 'react'
import {SingleLinks} from './utils'
import defaultAvatar from '../../assets/images/personDefault.svg'
import Avatar from 'material-ui/Avatar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import styled from 'styled-components'

const DIV = styled.div`
max-height:200px;
`
export default class PrivateElements extends React.Component{
  constructor(props){
    super(props)
    let studentId = props.studentId
    this.state = {studentId}
  }
  render(){
    return(
      <div>
    <Avatar src={defaultAvatar}/>
    <SingleLinks>
        Sign out
      </SingleLinks>
      <Link to='/settings'>
      <SingleLinks>
        Settings
      </SingleLinks>
    </Link>
    <Link to='/dashboard'>
      <SingleLinks>
        Dashboard
      </SingleLinks>
    </Link>
    </div>
    )
  }
}
