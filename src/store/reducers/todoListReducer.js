import {TODO} from '../actions/actionTypes'
import { fromJS } from 'immutable';
const initstate=fromJS({
  todos:[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]
})
export default (state=initstate,action) => {
  let newTodos=null
  switch(action.type){
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