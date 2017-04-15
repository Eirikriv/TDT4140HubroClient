import React from 'react'
import ImportSettings from './import/importSettings'
import Timesettings from './time/timeSettings'
import {LoginStatus} from '../../graphql/queries'
import CircularProgress from 'material-ui/CircularProgress';
import {graphql} from 'react-apollo'
import {browserHistory} from 'react-router'
import InsertNewEvents from './events/index'

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
    if(this.props.data.loading || !this.state.status){

      return(
          <div className="settingsPage">
            <div className="filler"/>
            <section  className="section-settings" id="settings-content">

              <CircularProgress size={100} thickness={5} />
            </section >


        </div>
    )
    }
    return(
      <div className="settingsPage">
        <div className="filler" id="settingsPage-filler"/>
        <section  className="section-settings" id="settings-content">
        <InsertNewEvents studentId={this.state.studentId}/>
        <ImportSettings studentId={this.state.studentId}/>
        <Timesettings studentId={this.state.studentId}/>
      </section>
      <div className="filler"/>
    </div>
    )
  }
}
export default graphql(LoginStatus)(Settings)
