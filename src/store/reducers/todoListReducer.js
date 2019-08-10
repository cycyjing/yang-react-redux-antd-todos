import {TODO} from '../actions/actionTypes'
// import { List } from 'immutable';
const initstate={
  todos:[]
}
export default (state=initstate,action) => {
  let newTodos=null
  switch(action.type){
    case TODO.GET:
      newTodos =state.todos.slice().concat(action.payload.todos)
    let newstate = {}
    Object.assign(newstate,state,{todos:newTodos})
      return  newstate
    case TODO.ADD:
      // const newTodos =JSON.parse(JSON.stringify(state.todos))
      //  newTodos =[...state.todos,{...action.payload,id:state.todos[state.todos.length-1].id+1}]
      state.mergeDeep('todos',{...action.payload,id:state.todos[state.todos.length-1].id+1})
      return newTodos
    case TODO.DELETE:
        newTodos =state.todos.filter((todo)=>{
          return todo.id!==action.payload.id
        })
      return newTodos
    case TODO.EDIT:
        newTodos =state.todos.map((todo)=>{
          if(todo.id===action.payload.todo.id){
            return {...todo,...action.payload.todo}
          }
          return todo
        })
   
      return newTodos
    default :return state
  }
}