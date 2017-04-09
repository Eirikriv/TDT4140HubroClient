import {AUTH_STATUS_ACTIVE, AUTH_STATUS_NOT_ACTIVE} from '../types/index'

const signout = (statusObject)=>{
return{
  type : AUTH_STATUS_NOT_ACTIVE,
  payload: {
    status: statusObject.status,
    studentId: statusObject.studentId,
    }
  }
}

const signin = (statusObject) => {
  return{
    type: AUTH_STATUS_ACTIVE,
    payload:{
      status: statusObject.status,
      studentId: statusObject.studentId
    }
  }
}

export {signout, signin}
