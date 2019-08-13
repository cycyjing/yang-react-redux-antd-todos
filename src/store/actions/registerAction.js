import { REGISTER } from './actionTypes'
import {registerFun} from '../../serverces/apis'
import {error} from './connectAction'
import {login} from './loginAction'

export const register = user => dispatch => {
 
  
  registerFun(user.username,user.password).then(data=>{
    data=data.data
    dispatch({
          type: REGISTER.REGISTER,
          payload: {
           isRegister:true
          }
        })
        login(data.username,data.password)(dispatch)
  }).catch(err=>{
      dispatch(error(err.message))
      return Promise.reject(err)
    })
}
export const changeRegisterState = (registerState) => {
  return {
    type: REGISTER.CHANGE_REGISTER_STATE,
    payload: registerState
  }
}