import {INITIAL_FETCH} from '../types/index'

const inititalFetchOfCourses = (value) =>{
  return{
  type: INITIAL_FETCH,
  payload: value
  }
}

export {inititalFetchOfCourses}
