import {gql} from 'react-apollo'

const getSettings = gql`query getUserSetting($studentId: String!) {
  user(studentID: $studentId) {
    studentSettings {
      name
      settingsID
      studentID
      value
    }
  }
}`

export {getSettings}
