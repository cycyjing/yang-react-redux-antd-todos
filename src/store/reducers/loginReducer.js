import {LOGIN} from '../actions/actionTypes'
import {fromJS} from 'immutable'
//从JS 对象转化为immutable对象
const initstate=fromJS(
  {
    isLogin:false,
    isError:false,
    errMsg:'',
    username:'a',
    password:'a'
  }
)
export default (state=initstate,action) => {
  const payload=action.payload
  switch(action.type){
    case LOGIN.LOGIN:
      if(initstate.get('username')===payload.username&&initstate.get('password')===payload.password){
        return state.set("isLogin",true)
      }else{ 
        return state.set({ isError:true,errMsg:'用户名或密码错误！'})
       
      }
      case LOGIN.LOGOUT:
        return state.set("isLogin",false)
     
    default :return state
  }
}
