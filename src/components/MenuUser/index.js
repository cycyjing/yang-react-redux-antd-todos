import React, { Component } from 'react'
import {Menu } from 'antd'


export default class index extends Component {
  render() {
    return (
      <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item onClick={this.props.logout}>Logout</Menu.Item>
       {/* <Title level={2}>Welcome {this.props.username}</Title> */}
    </Menu>
    )
  }
}
