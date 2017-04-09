import { combineReducers } from 'redux';
import dummy from './dummy'
import auth from './auth_reducer'
const rootReducer = combineReducers({
  dummy,
  auth
});

export default rootReducer;
