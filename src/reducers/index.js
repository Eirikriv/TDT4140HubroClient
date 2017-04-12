import { combineReducers } from 'redux';
import dummy from './dummy'
import auth from './auth_reducer'
import shouldRefetchAuth from './authUpdatereducer'
import coursesSelected from './course_reducer'
const rootReducer = combineReducers({
  dummy,
  auth,
  shouldRefetchAuth,
  coursesSelected
});

export default rootReducer;
