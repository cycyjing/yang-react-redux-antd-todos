import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';






export default class LoadMoreList extends Component {

  render() {
    return (
      <List
      itemLayout="horizontal"
      dataSource={this.props.todos}
      renderItem={item => (
        <List.Item actions={[<a>edit</a>, <a>delete</a>]}>
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

