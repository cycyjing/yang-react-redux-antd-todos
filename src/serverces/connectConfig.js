export default {
  baseConfig:{
    baseURL:'https://www.easy-mock.com/mock/5d4a4f16b82b13463b4fe07b/todos',
    // headers:''
    timeout:10000
  },
  apis:{
    getTodo:'https://jsonplaceholder.typicode.com/todos?userId=',
    register:'/addUsers',
    addtodo:'/addTodo',
    editTodo:'/editTodo',
    login:'/users'
  }

}