import {TODO} from './actionTypes'
import $http from '../../serverces'

import {error } from './connectAction'

export const gettodos =(userId)=>(dispatch)=>{
  $http.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).then(r=>r.data).then(data=>{
    console.log('data', data)
    dispatch({
      type:TODO.GET,
      payload:{
        todos:data,
        userId
      }
    })
  }).catch(err=>{
    dispatch(error(err.message))
    return Promise.reject(err)
  })

}
export const addTodo=(todo)=>{
  return {
    type:TODO.ADD,
    payload:{
      todo
    }
  }
}
export const delTodo=(id)=>{
  return {
    type:TODO.DELETE,
    payload:{
      id
    }
  }
}
export const editTodo=(todo)=>{
  return {
    type:TODO.EDIT,
    payload:{
      todo
    }
  }
}