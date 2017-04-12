import React from 'react'
import {compose, graphql} from 'react-apollo'
import {updateTimeEnd, updateTimeStart} from '../../graphql/mutations'
import TimePicker from 'material-ui/TimePicker';
import _ from 'lodash'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class DayTimeStartEnd extends React.Component{
  constructor(props){
    super(props)
    let start = _.split(props.start, ':', 3)
    let end = _.split(props.end, ':', 3)
    let startDate = new Date()
    let startHours = parseInt(start[0],10)
    let startMinutes = parseInt(start[1],10)
    startDate.setHours(startHours)
    startDate.setMinutes(startMinutes)
    let endDate = new Date()
    let endHours = parseInt(end[0],10)
    let endMinutes = parseInt(end[1],10)
    endDate.setHours(endHours)
    endDate.setMinutes(endMinutes)
    this.state = {startDate, endDate, studentId:props.studentId, settingsId:props.settingsId }
    this.handleEndChange = this.handleEndChange.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
  }
handleEndChange(event, date){
let houres = date.getHours().toString()
let minutes = date.getMinutes().toString()
let end = `${houres}:${minutes}:00`
this.props.newEndTime({
  variables:{studentId:this.state.studentId, settingsId:this.state.settingsId, end}
}).then( ({data})=>{
let newEnd = _.split(data.updateEndTime.end, ':', 3)
let newEndDate = new Date()
let newEndHours = parseInt(newEnd[0],10)
let newEndMinutes = parseInt(newEnd[1],10)
newEndDate.setHours(newEndHours)
newEndDate.setMinutes(newEndMinutes)
this.setState({end:newEndDate})
})


}
handleStartChange(event, date){
  let houres = date.getHours().toString()
  let minutes = date.getMinutes().toString()
  let start = `${houres}:${minutes}:00`
  this.props.newStartTime({
    variables:{studentId:this.state.studentId, settingsId:this.state.settingsId, start}
  }).then( ({data})=>{
  let newStart = _.split(data.updateStartTime.start, ':', 3)
  let newStartDate = new Date()
  let newStartHours = parseInt(newStart[0],10)
  let newStartMinutes = parseInt(newStart[1],10)
  newStartDate.setHours(newStartHours)
  newStartDate.setMinutes(newStartMinutes)
  this.setState({start:newStartDate})
  })
}

    render(){
      return(
        <div>
        <h3>
      When would you like Hubro to schedule events
        </h3>
        <table>
          <tbody>
            <tr>
              <td>
                Start
              </td>
              <td>
                <TimePicker
                          format="24hr"
                          hintText="Start time"
                          value={this.state.startDate}
                          onChange={this.handleStartChange}
                        />
              </td>
            </tr>
            <tr>
              <td>
                End
              </td>
              <td>
                  <TimePicker
                            format="24hr"
                            hintText="End time"
                            value={this.state.endDate}
                            onChange={this.handleEndChange}
                          />

          </td>
            </tr>
          </tbody>
        </table>
      </div>
      )
    }
  }

  const withMutation = compose(
    graphql(updateTimeStart, {name:'newStartTime'}),
    graphql(updateTimeEnd, {name:'newEndTime'})
  )(DayTimeStartEnd)
export default withMutation
