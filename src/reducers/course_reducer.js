import {INITIAL_FETCH} from '../types/index'

export default (state=[], action)=>{
    switch (action.type) {
      case INITIAL_FETCH:
        return action.payload
      default:
      return state        
    }
}
