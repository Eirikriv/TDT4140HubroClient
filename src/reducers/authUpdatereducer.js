import { UPDATE_AUTH, UPDATED_AUTH} from '../types/index'

export default (state=false, action) =>{
  switch (action.type) {
    case UPDATE_AUTH:
        return action.payload
    case UPDATED_AUTH:
        return action.payload
    default:
      return state

  }
}
