import React, { Component } from 'react'
import { Menu } from 'antd'
import { connect } from 'react-redux'
import { logout, changeRegisterState, register } from '../../store/actions'
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
        onSelect={this.handleMenuSelected}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" >Login</Menu.Item>
        <Menu.Item key="2" >Register</Menu.Item>

      </Menu>
    )
  }
}
export default connect(null, { changeRegisterState })(MenuLogin)