import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo,error } from '../../store/actions'
import { Form, Input,notification,Icon } from 'antd';

import './addtodo.less'

const { Search } = Input
const {create}=Form
const mapState = (state) => {
  return {
    todos: state.getIn(['todoListState', 'todos']),
    userId: state.getIn(['loginState', 'userId'])
  }
}

@create({name: 'horizontal_login'})
@connect(mapState,{addTodo,error})
class AddTodo extends Component {
  state={
    title:""
  }
  handleChnage=(e) => {
    this.setState(e.currentTarget.value)
  }
  componentDidMount() {
    this.props.form.validateFields();
  }
  handleAddtodo=(val) => {
    const todos = this.props.todos.toArray()
    const todoLength =todos.length 
   const isHave= todos.some((todo) => {
      return todo.title===val
    })
   
   if(isHave){
     this.props.error('You already  have this Todo in your list !')
   }
   else{
    this.props.addTodo({
      title:val,
      userId:this.props.userId,
      id:todos[todoLength-1].id+1,
      completed:false
    }).then(data => {
      if(data==="success"){
        this.props.form.setFieldsValue({'todo something':''})
        notification.success({
          message:"Add Todo success!",
          icon:<Icon type="smile" style={{ color: '#108ee9' }} />
        })
      }
    })
   }
  }
  render() {
    const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;

    const inputError = isFieldTouched('input') && getFieldError('input');
    const inputFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 5
        },
      },
    };
    return (
      <div className="addtodo_form">
        <Form
          {...inputFormItemLayout}
         >
          <Form.Item validateStatus={inputError ? 'error' : ''} help={inputError || ''} >
            {getFieldDecorator('todo something', {
              rules: [{  type: "string",whitespace:true,min:1, message: 'Please input your todo!' }],
            })(
              <Search
                placeholder="input search text"
                enterButton="Add Todo"
                size="large"
              
                allowClear
                onSearch={this.handleAddtodo}
              />,
            )}
          </Form.Item>
        </Form>
      </div>

    );
  }
}

export default AddTodo 