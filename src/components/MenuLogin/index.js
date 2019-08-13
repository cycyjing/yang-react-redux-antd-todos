import React, { Component } from 'react'
import { Menu } from 'antd'
import { connect } from 'react-redux'
import {  changeRegisterState } from '../../store/actions'
const mapState=(state) => ({
  isRegister: state.getIn(['registerState', 'isRegister']),
})

@connect(mapState, { changeRegisterState })
class MenuLogin extends Component {
  handleMenuSelected = (params) => {
    if (params.key === "1") {
      this.props.changeRegisterState({isRegister: true})
    } else if (params.key === "2") {
      this.props.changeRegisterState({isRegister: false})
    }
  }
  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        selectedKeys={this.props.isRegister?['1']:['2']}
        onSelect={this.handleMenuSelected}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" >Login</Menu.Item>
        <Menu.Item key="2" >Register</Menu.Item>

      </Menu>
    )
  }
}
export default MenuLogin