import {gql} from 'react-apollo'

const updateTypeSettings = gql`mutation updateSettings($studentId: String!, $settingsId: String!, $settingsName: String!, $settingsValue: Boolean!) {
  updateUserSettings(settingsID:$settingsId, studentID: $studentId,name:$settingsName, value:$settingsValue){settingsID studentID  name value}
}`

const addCourse = gql`mutation addCourse($studentId: String!, $courseID:String!, $courseName:String!){addStudentCourse(studentID:$studentId, courseID:$courseID, courseName:$courseName){courseName courseId selectedItem avgAssignmentTime}}`

const removeCourse = gql`mutation removeCourse($studentId: String!, $courseID:String!, $courseName:String!){removeStudentCourse(studentID:$studentId, courseID:$courseID, courseName:$courseName){courseName courseId selectedItem avgAssignmentTime}}`

const updateTimeEnd = gql`mutation updateEnd($studentId: String!, $settingsId: String!,$end: String!){updateEndTime(settingsID:$settingsId, studentID:$studentId, end:$end){settingsID studentID start end}}`
const updateTimeStart = gql`mutation updateStart($studentId: String!, $settingsId: String!,$start: String!){updateStartTime(settingsID:$settingsId, studentID:$studentId, start:$start){settingsID studentID start end}}`

const updateAvgAssignmentTime = gql`mutation updateAvgTime($studentId: String!,$courseID:String!, $courseName:String!, $avgAssignmentTime:String!){updateCourseAvgTime(studentID:$studentId, courseID:$courseID,courseName:$courseName,avgAssignmentTime:$avgAssignmentTime){courseName courseId avgAssignmentTime }}`
const SignOutMutation = gql`mutation{signOut{status studentID}}`
const UpdateCalendars = gql`mutation updateCalendars($studentId: String!){updateGoogleCalendars(studentID:$studentId){updatedCalendars}}`
export {updateTypeSettings, addCourse, removeCourse, updateTimeEnd, updateTimeStart, updateAvgAssignmentTime, SignOutMutation, UpdateCalendars}
