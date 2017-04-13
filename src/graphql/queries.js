import {gql} from 'react-apollo'

const getSettings = gql`query getUserSetting($studentId: String!) {
  user(studentID: $studentId) {
    studentSettings {
      name
      settingsID
      studentID
      value
    }
     courseSelected{courseName courseId selectedItem avgAssignmentTime}
  }
}`
const UserQuery = gql`query UserQuery($studentID: String!){user(studentID:$studentID){studentName profilePictureUrl}}`
const LoginStatus = gql`{currenUserStatus{status studentID}googleLink}`
const getTimeSettings = gql`query getTimeSettings($studentId: String!){user(studentID:$studentId){studentTimeSettings{settingsID start end studentID}}}`
export {getSettings, getTimeSettings, LoginStatus, UserQuery}
