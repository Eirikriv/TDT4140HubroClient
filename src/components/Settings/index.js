import React from 'react'
import ImportSettings from './import/importSettings'
import Timesettings from './time/timeSettings'
import {Outer} from './utils'
import {LoginStatus} from '../../graphql/queries'
import CircularProgress from 'material-ui/CircularProgress';
import {graphql} from 'react-apollo'
import {browserHistory} from 'react-router'
class Settings extends React.Component{
  constructor(props){
    super(props)
    this.state = {status:false, studentId:null}
  }

  componentWillMount(){
    this.props.data.refetch()
  }
  componentWillReceiveProps(nextprops){
    if(!nextprops.data.loading){
let studentId = nextprops.data.currenUserStatus.studentID
let status = nextprops.data.currenUserStatus.status

if(!status){
  browserHistory.push('/')
}
this.setState({status,studentId})
  }
  }

  render(){
    if(!this.state.status || this.props.data.loading){

      return(
        <Outer>
        <CircularProgress size={100} thickness={5} />

      </Outer>
    )
    }
    return(
      <Outer>
        <ImportSettings studentId={this.state.studentId}/>
        <Timesettings studentId={this.state.studentId}/>
      </Outer>
    )
  }
}
export default graphql(LoginStatus)(Settings)
