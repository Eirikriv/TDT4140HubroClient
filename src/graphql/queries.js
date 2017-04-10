import {gql} from 'react-apollo'

const getSettings = gql`query getUserSetting($studentId: String!) {
  user(studentID: $studentId) {
    studentSettings {
      name
      settingsID
      studentID
      value
    }
     courseSelected{courseName courseId selectedItem}
  }
}`

export {getSettings}
