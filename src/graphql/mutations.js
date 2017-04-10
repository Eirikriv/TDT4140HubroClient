import {gql} from 'react-apollo'

const updateTypeSettings = gql`mutation updateSettings($studentId: String!, $settingsId: String!, $settingsName: String!, $settingsValue: Boolean!) {
  updateUserSettings(settingsID:$settingsId, studentID: $studentId,name:$settingsName, value:$settingsValue){settingsID studentID  name value}
}`
export {updateTypeSettings}
