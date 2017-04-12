import React from 'react'
import {connect} from 'react-redux'

class AvgTimePerAssignmentCourse extends React.Component{
  constructor(props){
    super(props)
    this.renderList = this.renderList.bind(this)
    this.state = {coursesSelected:props.coursesSelected}
    this.handleChange = this.handleChange.bind(this)
  }
componentWillReceiveProps(nextProps){
//console.log(nextProps);
this.setState({coursesSelected:nextProps.coursesSelected})
}

handleChange(event){
  // let avgTime = event.target.value
  // let courseId = event.target.id
  // let courseName = event.target.name
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

            <input type="text" id={course.courseId} name={course.courseName} value={course.avgAssignmentTime} onChange={this.handleChange}/>
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

export default AvgTimePerAssignmentCourse
