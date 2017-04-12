import React from 'react'
import _ from 'lodash'
import {graphql, compose} from 'react-apollo'
import {addCourse, removeCourse} from '../../graphql/mutations'
import Toggle from 'material-ui/Toggle';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {inititalFetchOfCourses} from '../../actions/courseAction'
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

  componentDidMount(){
    let selectedArray = []
    _.forEach(this.state.courses, (course)=>{
      if(course.selectedItem){
        selectedArray.push(course)
      }
    })
    this.props.inititalFetchOfCourses(selectedArray)
  }

handleChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  const id = event.target.id
    if (value){
    //add
    this.props.newStudentCourseMutation({
      variables:{studentId:this.state.studentId, courseID:id, courseName:name }
    }).then(({data})=>{

      let prevState = this.state.courses
      let addedCourse = data.addStudentCourse
      prevState.map((course)=>{
        if(course.courseId === id){
          course.selectedItem = addedCourse.selectedItem
        }
        return course
      })
        this.setState({courses:prevState})
        let selectedArray = []
        _.forEach(this.state.courses, (courses)=>{
          if(courses.selectedItem){
            selectedArray.push(courses)
          }
        })
        this.props.inititalFetchOfCourses(selectedArray)
    })
  }else{
    this.props.removeStudentCourseMutation({
      variables:{studentId:this.state.studentId, courseID:id, courseName:name}
    }).then(({data})=>{

      let prevState = this.state.courses
      let removedCourse = data.removeStudentCourse
      prevState.map((course)=>{
        if(course.courseId === id){
          course.selectedItem = removedCourse.selectedItem
        }
        return course
      })
        this.setState({courses:prevState})
        let selectedArray = []
        _.forEach(this.state.courses, (courses)=>{
          if(courses.selectedItem){
            selectedArray.push(courses)
          }
        })
        this.props.inititalFetchOfCourses(selectedArray)
  })
}


}
  renderList(){

  return( this.state.courses.map((course)=>{
    return(
      <tr key={course.courseId}>
        <td>
          {course.courseName}
        </td>
        <td>
      
          <input name={course.courseName} id={course.courseId} type="checkbox" checked={course.selectedItem} onChange={this.handleChange}/>
        </td>
      </tr>
    )
  }))
  }
    render(){
      return(
        <div>
      <h3>Courses</h3>
        <table>
        <tbody>
        {this.renderList()}
        </tbody>
        </table>
      </div>
      )
    }
  }

  const mapDispatchToProps =(dispatch) =>{
    return bindActionCreators({inititalFetchOfCourses},dispatch)
  }

Courses = connect(null, mapDispatchToProps)(Courses)
const CoursesWithMutation = compose(
  graphql(addCourse, {name:'newStudentCourseMutation'}),
  graphql(removeCourse, {name:'removeStudentCourseMutation'})
)(Courses)


export default CoursesWithMutation
