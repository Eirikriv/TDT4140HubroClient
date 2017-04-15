import React from 'react'
import _ from 'lodash'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField';
import {updateAvgAssignmentTime} from '../../../graphql/mutations'
import {getSettings} from '../../../graphql/queries'
class AvgTimePerAssignmentCourse extends React.Component{
  constructor(props){
    super(props)
    let courses = props.courseSelected
    this.state = {courseSelected:this.prettiFy(courses), studentId:props.studentId}
    this.renderList = this.renderList.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.prettiFy = this.prettiFy.bind(this)
  }
componentWillReceiveProps(nextProps){
this.setState({courseSelected:this.prettiFy(nextProps.courseSelected)})
}

prettiFy(courses){
  courses = _.filter(courses,(o)=>{return o.selectedItem})
  let array = []
  _.forEach(courses,(o)=>{
    let obj = {
      avgAssignmentTime:o.avgAssignmentTime,
      courseId: o.courseId,
      courseName: o.courseName,
      selectedItem: o.selectedItem
    }
    array.push(obj)
  })
  array.map((course)=>{
  try {
    let stringTime = _.split(course.avgAssignmentTime, ':', 3)
    let hours = stringTime[0]
    let minutes = stringTime[1]
    course.avgAssignmentTime = `${hours}:${minutes}`
    return course
  } catch (e) {
    return course
  }
})
return array
}


handleChange(event, newStringValue){
  let avgAssignmentTime = event.target.value
  let courseID = event.target.id
  let courseName = event.target.name
let re = new RegExp('^[0-9][0-9]:[0-5][0-9]$|^[0-9][0-9]:[0-5]$|^[0-9][0-9]:$|^[0-9][0-9]$|^[0-9]$|^$')
if(re.test(newStringValue)){
let oldState = this.state.courseSelected
let newState = []
_.forEach(oldState, (course)=>{
  if(course.courseId === courseID){
    course.avgAssignmentTime = avgAssignmentTime
  }
  newState.push(course)
})
this.setState({courseSelected:newState})
  }
let valid = new RegExp('^[0-9][0-9]:[0-5][0-9]$')
  if(valid.test(newStringValue)){
    this.props.mutate({
      variables:{
        studentId: this.state.studentId,courseID, courseName, avgAssignmentTime
      },
      refetchQueries:[{query:getSettings,
      variables:{studentId:this.state.studentId}}]
    }).then()
  }
}
renderList(){

  if (!this.state.courseSelected.length > 0){return}
  return(
    this.state.courseSelected.map((course)=>{
      return(
        <tr key={course.courseId}>
          <td className="time-first-td">
            {course.courseName}
          </td>
          <td className="time-second-td">
            <TextField
            hintText="Hint Text"
            id={course.courseId}
            name={course.courseName}
            value={course.avgAssignmentTime}
            onChange={this.handleChange}
            className="time-textfield"/>

          </td>

        </tr>
      )
    })
  )
}

  render(){
    return (
      <table>
        <tbody>
      {this.renderList()}
    </tbody>
    </table>
    )
  }
}


export default graphql(updateAvgAssignmentTime)(AvgTimePerAssignmentCourse)
