import { LOGIN } from './actionTypes'
//由两种 action creator
//1. 非异步 返回一个action
//2 异步的  两个箭头函数  第二个箭头函数接受 一个dispatch 异步完成后 手动dispatch
export const login = (username, password) => {
  
  return {
    type: LOGIN.LOGIN,
    payload:{
      username,
      password
    }
  }
}

export const logout = () => {
  return {
    type: LOGIN.LOGOUT,
    payload:{
      
    }
  }
}
