import React from 'react'
import {graphql} from 'react-apollo'
import {getTimeSettings} from '../../../graphql/queries'
import DayTimeStartEnd from './dayTimeStartEnd'
import AvgTimePerAssignmentCourse from './avgTimePerAssignmentCourse'
class Timesettings extends React.Component{
  constructor(props){
    super(props)
    this.handleLoad = this.handleLoad.bind(this)
  }


  handleLoad(){
    if(!this.props.data.loading){
      let settings = this.props.data.user.studentTimeSettings
      return(<section className="section-settings-time">
        <DayTimeStartEnd start={settings.start} end={settings.end} settingsId={settings.settingsID} studentId={settings.studentID}/>
        <AvgTimePerAssignmentCourse studentId={settings.studentID}/>
        </section>
    )

    }
  }
    render(){
      return(
        <section className="section-block-settings-time">
        <h1>Time </h1>
        {this.handleLoad()}
      </section>
      )
    }
  }


export default graphql(getTimeSettings,{
  options: ({ studentId }) => ({ variables: { studentId } }),
})(Timesettings)
