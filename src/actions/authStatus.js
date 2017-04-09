import {AUTH_STATUS_ACTIVE, AUTH_STATUS_NOT_ACTIVE, UPDATE_AUTH, UPDATED_AUTH} from '../types/index'

const updateAuth = (value) =>{
    return {
      type: UPDATE_AUTH,
      payload :{
        value
      }
    }
}

const UpdatedAuth = (value) =>{
  return{
    type: UPDATED_AUTH,
    payload: {
      value
    }
  }
}

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

export {signout, signin, updateAuth}
