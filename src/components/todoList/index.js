import React, { Component } from 'react';
import { List, Avatar, Typography, Button ,notification,Icon} from 'antd';
import { connect } from 'react-redux'
import { addTodo, delTodo, editTodo, gettodos } from '../../store/actions'
import Addtodo from './AddTodo'


const { Text ,Title} = Typography;

const mapState = (state) => {

  return {
    todos: state.getIn(['todoListState', 'todos']),
    isLoading: state.getIn(['connectState', 'isLoading']),
    userId: state.getIn(['loginState', 'userId'])
  }
}
@connect(mapState, { addTodo, delTodo, editTodo, gettodos })
class LoadMoreList extends Component {
  componentDidMount() {
    if (this.props.todos.size === 0) {
      this.props.gettodos(this.props.userId)
    }
  }
  handleReset = (item) => {
    this.props.editTodo({
      title:item.title,
      userId:item.userId,
      id:item.id,
      completed:false
    })
    notification.success({
      message:"You completed one thing more!",
      icon:<Icon type="smile" style={{ color: '#108ee9' }} />
    })
   
  }
  handleDelete = (item) => {
    this.props.delTodo(item.id)
    notification.warning({
      message:"Your Todo has deleted!",
      icon:<Icon type="meh" style={{ color: 'red' }} />
    })
  }
  handleCompleted = (item) => {
    this.props.editTodo({
      title:item.title,
      userId:item.userId,
      id:item.id,
      completed:true
    })
    notification.info({
      message:"Your Todo is reseted",
      icon:<Icon type="meh" style={{ color: 'red' }} />
    })
  }
  render() {
    const MyButton=(props) => {
      const handleClick=() => {
        props.handleClick(props.item)
      }
      return <Button type="link" onClick={handleClick}>{props.children}</Button>
    }
    return (
      <>
        <Addtodo />
        <List
          itemLayout="horizontal"
          dataSource={this.props.todos}
          header={<Title level={3}>You need todo!</Title>}
          renderItem={item => (
            <List.Item 
            key={item.id}
            actions={
              item.completed
                ?
                [<MyButton type="link" item={item} handleClick={this.handleReset}>reset</MyButton>,
                <MyButton type="link" item={item} handleClick={this.handleDelete}>delete</MyButton>]
                :
                [<MyButton type="link" item={item} handleClick={this.handleCompleted}>completed</MyButton>,
                <MyButton type="link" item={item} handleClick={this.handleDelete}>delete</MyButton>]}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<Text type={item.completed ? "secondary" : ""} delete={item.completed}> {item.title}</Text>}
              />
            </List.Item>
          )}
        />
      </>
    )
  }
}
export default LoadMoreList
