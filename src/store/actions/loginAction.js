import { LOGIN } from './actionTypes'
import { error } from './connectAction'
//由两种 action creator
//1. 非异步 返回一个action
//2 异步的  两个箭头函数  第二个箭头函数接受 一个dispatch 异步完成后 手动dispatch
import $http from '../../serverces'
export const login = (username, password) => (dispatch) => {
  $http.post('/users',{
    username,
    password
  }).then(r => {
    return r.data.data}).then(data => {
    window.localStorage.setItem('username',data.username)
    window.localStorage.setItem('password',data.password)
    window.localStorage.setItem('userId',data.userId)
    
    dispatch({
      type: LOGIN.LOGIN,
      payload: {
        username:data.username,
        password:data.password,
        userId:data.userId,
        isLogin:true
      }
    })
  }).catch(err => {
    dispatch(error(err.message))
  })

}

export const logout = () => {
  window.localStorage.clear()
  return {
    type: LOGIN.LOGOUT,
    payload: {
      isLogin:false
    }
  }
}
