import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import {connect} from 'react-redux'
import { addTodo, delTodo, editTodo ,gettodos} from '../../store/actions'

const mapState = (state) => {

  return {
    todos: state.getIn(['todoListState','todos']),
    isLoading: state.getIn(['connectState', 'isLoading']),
    userId:state.getIn(['loginState','userId'])
  }
}

 class LoadMoreList extends Component {
  componentDidMount(){   
    if(this.props.todos.size===0){
      this.props.gettodos('2')
    }
  }
  render() {
    return (
      <List
      itemLayout="horizontal"
      dataSource={this.props.todos}
      renderItem={item => (
        <List.Item actions={[<a>completed</a>, <a>delete</a>]}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
          />
        </List.Item>
      )}
    />
    );
  }
}
export default connect(mapState,{ addTodo, delTodo, editTodo ,gettodos})(LoadMoreList)
