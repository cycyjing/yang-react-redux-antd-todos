import { TODO } from '../actions/actionTypes'
import { fromJS } from 'immutable';
const initstate = fromJS({
  todos: []
})
export default (state = initstate, action) => {
  let newTodos = null
  switch (action.type) {
    case TODO.GET:
      newTodos = state
      .get('todos')
      .merge(action.payload.todos)
      .sort(
        (val1,val2) => {
          if(val1.id>val2.id){return -1} 
          else return 1
        }
        )
      return state.set('todos', newTodos)
    case TODO.ADD:  
      newTodos = state.get('todos').unshift({ ...action.payload})
      return state.set('todos', newTodos)
    case TODO.DELETE:
      newTodos = state.get('todos').filterNot((todo) => {
        return todo.id === action.payload.id
      })
      return state.set('todos', newTodos)
    case TODO.EDIT:
      newTodos = state.get('todos').map((todo) => {
        if (todo.id === action.payload.todo.id) {
          return { ...todo, ...action.payload.todo }
        }
        return todo
      })
      return state.set('todos', newTodos)
    default: return state
  }
}