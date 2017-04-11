import React from 'react'
import {connect} from 'react-redux'

class AvgTimePerAssignmentCourse extends React.Component{
  constructor(props){
    super(props)
    this.renderList = this.renderList.bind(this)
  }


renderList(){

  return(
    this.props.coursesSelected.map((course)=>{
      return(
        <tr key={course.courseId}>
          <td>
            {course.courseName}
          </td>
          <td>
            lol
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
