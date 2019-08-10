import {LOGIN} from '../actions/actionTypes'
import {fromJS,merge} from 'immutable'
//从JS 对象转化为immutable对象
const initstate=fromJS(
  {
    isLogin:false,
    errMsg:'',
    username:'a',
    password:'a',
    userId:''
  }
)
export default (state=initstate,action) => {
  switch(action.type){
    case LOGIN.LOGIN:
      console.log(action)
        return merge(state,action.payload)
      case LOGIN.LOGOUT:
        return merge(state,action.payload)
    default :return state
  }
}
