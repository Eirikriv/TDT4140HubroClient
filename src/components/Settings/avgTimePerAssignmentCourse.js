import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import TimePicker from 'material-ui/TimePicker'

class AvgTimePerAssignmentCourse extends React.Component{
  constructor(props){
    super(props)
    this.renderList = this.renderList.bind(this)
    this.state = {coursesSelected:props.coursesSelected}
    this.handleChange = this.handleChange.bind(this)
    this.convertDate = this.convertDate.bind(this)
  }
componentWillReceiveProps(nextProps){
//console.log(nextProps);
this.setState({coursesSelected:nextProps.coursesSelected})
}

convertDate(string){
  let convertedDate = new Date();

string = _.split(string, ':', 3)
  let hours = parseInt(string[0],10)
  let minutes = parseInt(string[1],10)
  convertedDate.setHours(hours)
  convertedDate.setMinutes(minutes)
  return convertedDate
}
handleChange(event, date){
  // let avgTime = event.target.value
  // let courseId = event.target.id
  // let courseName = event.target.name
  console.log(date);
}
renderList(){

  if (this.state.coursesSelected.length === 0){return}
  return(
    this.state.coursesSelected.map((course)=>{
      return(
        <tr key={course.courseId}>
          <td>
            {course.courseName}
          </td>
          <td>
            <TimePicker
                      format="24hr"
                      hintText="Start time"
                      name={course.courseName}
                      id={course.courseId}
                      value={this.convertDate(course.avgAssignmentTime)}
                      onChange={this.handleChange}
                    />

          </td>

        </tr>
      )
    })
  )
}
//<input type="text" id={course.courseId} name={course.courseName} value={course.avgAssignmentTime} onChange={this.handleChange}/>

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

export default AvgTimePerAssignmentCourse
