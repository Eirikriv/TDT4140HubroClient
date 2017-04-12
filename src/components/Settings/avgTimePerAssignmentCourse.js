import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import TimePicker from 'material-ui/TimePicker'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField';
import {updateAvgAssignmentTime} from '../../graphql/mutations'
class AvgTimePerAssignmentCourse extends React.Component{
  constructor(props){
    super(props)
    this.renderList = this.renderList.bind(this)
    this.state = {coursesSelected:this.prettiFy(props.coursesSelected), studentId:props.studentId}
    this.handleChange = this.handleChange.bind(this)
    this.prettiFy = this.prettiFy.bind(this)
  }
componentWillReceiveProps(nextProps){
this.setState({coursesSelected:this.prettiFy(nextProps.coursesSelected)})
}

prettiFy(courses){
courses.map((course)=>{
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
return courses
}
handleChange(event, newStringValue){
  let avgAssignmentTime = event.target.value
  let courseID = event.target.id
  let courseName = event.target.name
let re = new RegExp('^[0-9][0-9]:[0-5][0-9]$|^[0-9][0-9]:[0-5]$|^[0-9][0-9]:$|^[0-9][0-9]$|^[0-9]$|^$')
if(re.test(newStringValue)){
let oldState = this.state.coursesSelected
let newState = []
_.forEach(oldState, (course)=>{
  if(course.courseId === courseID){
    course.avgAssignmentTime = avgAssignmentTime
  }
  newState.push(course)
})
this.setState({coursesSelected:newState})
  }
let valid = new RegExp('^[0-9][0-9]:[0-5][0-9]$')
  if(valid.test(newStringValue)){
    console.log('mutate');
    this.props.mutate({
      variables:{
        studentId: this.state.studentId,courseID, courseName, avgAssignmentTime
      }
    }).then(({data})=> console.log(data))
  }
}
renderList(){

  if (!this.state.coursesSelected.length > 0){return}
  return(
    this.state.coursesSelected.map((course)=>{
      return(
        <tr key={course.courseId}>
          <td>
            {course.courseName}
          </td>
          <td>
            <TextField
            hintText="Hint Text"
            id={course.courseId}
            name={course.courseName}
            value={course.avgAssignmentTime}
            onChange={this.handleChange}/>

          </td>

        </tr>
      )
    })
  )
}

  render(){
    return (<div>
      <table>
        <tbody>
      {this.renderList()}
    </tbody>
    </table>
    </div>)
  }
}
const mapStateToProps = (state)=>{
  return{
    coursesSelected : state.coursesSelected
  }
}

AvgTimePerAssignmentCourse = connect(mapStateToProps)(AvgTimePerAssignmentCourse)

export default graphql(updateAvgAssignmentTime)(AvgTimePerAssignmentCourse)
