import {AUTH_STATUS_NOT_ACTIVE, AUTH_STATUS_ACTIVE} from '../types/index'
const initialState = {
  studentId: null,
  status: false
}

export default (state=initialState, action)=>{
  switch (action.types) {
    case AUTH_STATUS_NOT_ACTIVE:
      return action.payload
    case AUTH_STATUS_ACTIVE:
      return action.payload
    default:
      return state
  }
}
