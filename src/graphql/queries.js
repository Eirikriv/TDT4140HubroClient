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

const getTimeSettings = gql`query getTimeSettings($studentId: String!){user(studentID:$studentId){studentTimeSettings{settingsID start end studentID}}}`
export {getSettings, getTimeSettings}
