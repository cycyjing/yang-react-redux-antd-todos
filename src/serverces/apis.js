import $http from './index'
import connectConfig from './connectConfig'

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
export const loginFun = async (username, password) => {
  return await $http.post(login, { username, password }).then(r => r.data)
}
export const registerFun =async (username, password) => {
  return await $http.post(register, { username, password }).then(r => r.data)
}
export const getTodosFun =async  (userId) => {
  return await $http.get(getTodo + userId).then(r => r.data)
}
export const editTodoFun = async (todo) => {
  return await $http.post(editTodo, { todo }).then(r => r.data)
}
export const addTodoFun = async (todo) => {
  return await $http.post(addtodo, { todo }).then(r => JSON.parse(r.config.data))
}