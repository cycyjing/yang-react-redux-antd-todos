import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout, changeRegisterState, register } from '../../store/actions'
import { MenuLogin, MenuUser } from '../../components'
import { Layout } from 'antd';
const { Header } = Layout
const mapState = (state) => {
  return {
    username: state.getIn(['loginState', 'username']),
    isLogin: state.getIn(['loginState', 'isLogin']),
  }

}
class Head extends Component {
  render() {
    return (
      <Header>
        <div className="logo" />
        {this.props.isLogin ?
          <MenuUser  logout={this.props.logout} /> :
          <MenuLogin />
        }
      </Header>
    )
  }
}


export default connect(mapState, { logout, changeRegisterState, register })(Head)