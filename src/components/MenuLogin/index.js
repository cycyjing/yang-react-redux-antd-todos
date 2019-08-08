import React, { Component } from 'react'
import {Menu } from 'antd'

export default class index extends Component {
  handleMenuSelected=(params)=>{
    console.log(params)
    this.props.se(params.key)
  }
  render() {
    return (
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      onSelect={this.handleMenuSelected}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1" >Login</Menu.Item>
      <Menu.Item key="2" >Register</Menu.Item>

    </Menu>
    )
  }
}
