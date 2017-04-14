import React from 'react'
import {graphql} from 'react-apollo'
import {getTimeSettings} from '../../../graphql/queries'
import DayTimeStartEnd from './dayTimeStartEnd'
import AvgTimePerAssignmentCourse from './avgTimePerAssignmentCourse'
import CircularProgress from 'material-ui/CircularProgress';

class Timesettings extends React.Component{
  
    render(){
        if(!this.props.data.loading){
          let settings = this.props.data.user.studentTimeSettings
          return(<section className="section-block" id="section-block-settings-time">
          <h1>Time settings</h1>
          <DayTimeStartEnd start={settings.start} end={settings.end} settingsId={settings.settingsID} studentId={settings.studentID}/>
          <AvgTimePerAssignmentCourse studentId={settings.studentID}/>
        </section>
      )

    }
    return(
        <section className="section-block" id="section-block-settings-time">
        <h1>Time Settings</h1>
        <div className="progress-mui">
        <CircularProgress size={100} thickness={5} />
      </div>
      </section>
      )
    }
  }


export default graphql(getTimeSettings,{
  options: ({ studentId }) => ({ variables: { studentId } }),
})(Timesettings)
