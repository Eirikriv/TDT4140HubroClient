/* This js script updates the users course settings to the database, and displays existing
 * settings to the user. This includes which courses are toggled on or of, and should be included in the users
 * personal calendar. */

import React from 'react'
import _ from 'lodash'
import {graphql, compose} from 'react-apollo'
import {addCourse, removeCourse} from '../../../graphql/mutations'
import {getSettings, LoginStatus} from '../../../graphql/queries'
import Toggle from 'material-ui/Toggle';

class Courses extends React.Component{
  constructor(props){
    super(props)
    let array = []
    _.forEach(props.courses, (course)=>{
      let obj={
        courseId : course.courseId,
        courseName: course.courseName,
        selectedItem: course.selectedItem,
        avgAssignmentTime: course.avgAssignmentTime
      }

      array.push(obj)
    })
    this.state={studentId:props.studentId, courses:array}
    this.renderList = this.renderList.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
   componentWillReceiveProps(nextProps){

     let array = []
     _.forEach(nextProps.courses, (course)=>{
       let obj={
         courseId : course.courseId,
         courseName: course.courseName,
         selectedItem: course.selectedItem,
         avgAssignmentTime: course.avgAssignmentTime
       }

       array.push(obj)
     })
     this.setState({studentId:nextProps.studentId, courses:array})
   }



handleChange(event, isInputChecked){
  let courseName = event.target.name
  let courseID = event.target.id
  let courseValue = isInputChecked
  if (courseValue){
    this.props.newStudentCourseMutation({
      variables:{studentId:this.state.studentId, courseID, courseName },
      refetchQueries:[{query:getSettings,
      variables:{studentId:this.state.studentId}}, {query:LoginStatus}]
    }).then().catch(err=>console.log('err'))
  }else{
    this.props.removeStudentCourseMutation({
      variables:{studentId:this.state.studentId, courseID, courseName},
      refetchQueries:[{query:getSettings,
      variables:{studentId:this.state.studentId}}, {query:LoginStatus}]
    }).then().catch(err=> console.log(this.state.studentId))

}

}
  renderList(){

  return( this.state.courses.map((course)=>{
    return(
      <tr key={course.courseId}>
        <td>
          {course.courseName}
        </td>
        <td className="toggle-td">

            <Toggle
              id={course.courseId}
              name={course.courseName}
              toggled={course.selectedItem}
              onToggle={this.handleChange}
              />


        </td>
      </tr>
    )
  }))
  }
    render(){
      return(

        <table>
        <tbody>
        {this.renderList()}
      </tbody>
    </table>

      )
    }
  }


const CoursesWithMutation = compose(
  graphql(addCourse, {name:'newStudentCourseMutation'}),
  graphql(removeCourse, {name:'removeStudentCourseMutation'})
)(Courses)


export default CoursesWithMutation
