import $http from './index'
import connectConfig from './connectConfig'
import { async } from 'q';
import store from '../store/store'
import { error } from '../store/actions'
const { login, register, addtodo, getTodo, editTodo } = connectConfig.apis
const $post = async (params, api) => {
  try {
    const responce = await $http.post(api, { ...params })
    return await responce.data
  }
  catch (err) {
    store.dispatch(error(err.message))
  }
}
const $get = async (params, api) => {
  try {
    const responce = await $http.get(api, {params:{ ...params }})
    return await responce.data
  }
  catch (err) {
    store.dispatch(error(err.message))
  }

}
export const loginFun = (username, password) => {
  return $http.post(login, { username, password }).then(r => r.data)
}
export const registerFun = (username, password) => {
  return $http.post(register, { username, password }).then(r => r.data)
}
export const getTodosFun = (userId) => {
  return $http.get(getTodo + userId).then(r => r.data)
}
export const editTodoFun = (todo) => {
  return $http.post(editTodo, { todo }).then(r => r.data)
}
export const addTodoFun = (todo) => {
  return $http.post(addtodo, { todo }).then(r => r.data)
}