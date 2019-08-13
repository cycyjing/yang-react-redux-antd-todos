import { TODO } from './actionTypes'
import { getTodosFun, addTodoFun, editTodoFun } from '../../serverces/apis'
import { error } from './connectAction'

export const gettodos = (userId) => (dispatch) => {
  getTodosFun(userId).then(data => {
    dispatch({
      type: TODO.GET,
      payload: {
        todos: data,
        userId
      }
    })
  }).catch(err => {
    dispatch(error(err.message))
    return Promise.reject(err)
  })

}
export const addTodo = todo =>dispatch=> {
 return  addTodoFun(todo).then(data=>{
     dispatch({ type: TODO.ADD,
      payload: {
        ...data.todo
      }})
      return Promise.resolve('success')
  })
}
export const delTodo = (id) => {
  return {
    type: TODO.DELETE,
    payload: {
      id
    }
  }
}
export const editTodo = (todo) => {
  return {
    type: TODO.EDIT,
    payload: {
      todo
    }
  }
}