import { REGISTER } from '../actions/actionTypes'
import {fromJS} from 'immutable'
const initstate=fromJS({
  isRegister:true
})
export default (state=initstate,action) => {
  switch(action.type){
    case REGISTER.CHANGE_REGISTER_STATE:
      return state.merge(state,action.payload)
    case REGISTER.REGISTER:
    
      return state.merge(state,action.payload)
    default :return state
  }
}