import { REGISTER } from './actionTypes'
import $http from '../../serverces'
import {error} from './connectAction'

export const register = user => dispatch => {
  $http.post().then((r) => r.data).then(data => {
    console.log(data)
    dispatch({
      type: REGISTER.REGISTER,
      payload: {
       username:data.username,
       password:data.password,
       userId:data.userId
      }
    })
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