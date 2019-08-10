import { TODO } from '../actions/actionTypes'
import { fromJS } from 'immutable';
const initstate = fromJS({
  todos: []
})
export default (state = initstate, action) => {
  let newTodos = null
  switch (action.type) {
    case TODO.GET:
      //   newTodos =state.todos.slice().concat(action.payload.todos)
      // let newstate = {}
      // Object.assign(newstate,state,{todos:newTodos})
      // console.log(state.get('todos').concat(action.payload.todos).toJS(),'11111111111111111111111111111111111111111')
      newTodos = state.get('todos').concat(action.payload.todos)
      return state.set('todos', newTodos)
    case TODO.ADD:
      newTodos = state.get('todos').push({ ...action.payload, id: state.get('todos').last().id + 1 })

      return state.set('todos', newTodos)
    case TODO.DELETE:
      newTodos = state.get('todos').filterNot((todo) => {
        return todo.id !== action.payload.id
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