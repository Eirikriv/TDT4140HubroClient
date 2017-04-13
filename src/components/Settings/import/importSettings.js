import React from 'react'
import {graphql} from 'react-apollo'

import {getSettings} from '../../../graphql/queries'
import Courses from './courseSettings'
import Lines from './typesSettings'
import CircularProgress from 'material-ui/CircularProgress';
//<CircularProgress size={100} thickness={5} />
import styled from 'styled-components'
const CstudentId="117016280903482792588"

const ImportSettingsDiv = styled.div`
height:30vh;
width:500px;
margin: 10vh auto auto 25%;
`
const Content = styled.div`
height:100%;
width:100%;
margin:0 50% auto auto
`

const TITLE = styled.div`
font-size:40px;
width:500px;
text-align:center;
padding-top: 20px;
`
const Descripton = styled.p`
font-size:15px;
text-align:center;
`
class ImportSettings extends React.Component{
  constructor(props){
    super(props)
    this.state = {studentId:props.studentId}
    this.handleLoad = this.handleLoad.bind(this)
  }

componentWillReceiveProps(nextProps){
}
  handleLoad(){
    if(!this.props.data.loading){

      return(<Content>
        <Lines settings={this.props.data.user.studentSettings}/>
        <Courses courses={this.props.data.user.courseSelected} studentId={this.state.studentId}/>
      </Content>
    )

    }
  }
    render(){

      return(
        <ImportSettingsDiv>
        <TITLE>Import settings</TITLE>
        <Descripton>- What do you want to import?</Descripton>
        {this.handleLoad()}
      <CircularProgress size={100} thickness={5} />
        </ImportSettingsDiv>
      )
    }
  }


export default graphql(getSettings,{
  options: ({ studentId }) => ({ variables: { studentId } }),
})(ImportSettings)
