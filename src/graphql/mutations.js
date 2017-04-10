import {gql} from 'react-apollo'

const updateTypeSettings = gql`mutation updateSettings($studentId: String!, $settingsId: String!, $settingsName: String!, $settingsValue: Boolean!) {
  updateUserSettings(settingsID:$settingsId, studentID: $studentId,name:$settingsName, value:$settingsValue){settingsID studentID  name value}
}`

const addCourse = gql`mutation addCourse($studentId: String!, $courseID:String!, $courseName:String!){addStudentCourse(studentID:$studentId, courseID:$courseID, courseName:$courseName){courseName courseId selectedItem}}`

const removeCourse = gql`mutation removeCourse($studentId: String!, $courseID:String!, $courseName:String!){removeStudentCourse(studentID:$studentId, courseID:$courseID, courseName:$courseName){courseName courseId selectedItem}}`
export {updateTypeSettings, addCourse, removeCourse}
