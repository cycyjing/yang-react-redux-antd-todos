import {TODO} from './actionTypes'
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