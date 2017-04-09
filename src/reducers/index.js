import { combineReducers } from 'redux';
import dummy from './dummy'
import auth from './auth_reducer'
import shouldRefetchAuth from './authUpdatereducer'
const rootReducer = combineReducers({
  dummy,
  auth,
  shouldRefetchAuth
});

export default rootReducer;
