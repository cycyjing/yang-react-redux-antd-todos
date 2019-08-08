import React, { Component } from 'react';
import { Layout } from 'antd';
import { Login, Register, MenuLogin, MenuUser, TodoList } from '../../components'
import { connect } from 'react-redux'
import { login,logout,addTodo,delTodo,editTodo,changeRegisterState,register} from '../../store/actions'
import {List} from 'immutable'
const { Header, Content, Footer } = Layout;
const mapState = (state) => {
 console.log(List(state.getIn(['todoListState','todos'])).toArray())
  return {
    todos:List(state.getIn(['todoListState','todos'])),
    isLogin:state.getIn(['loginState','isLogin']),
    isError:state.getIn(['loginState','isError']),
    errMsg:state.getIn(['loginState','errMsg']),
    username:state.getIn(['loginState','username']),
    password:state.getIn(['loginState','password']),
    isRegister:state.getIn(['registerState','isRegister'])
  }
}

class HomePage extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          {this.props.isLogin ?
            <MenuUser username={this.props.username} logout={this.props.logout} /> :
            <MenuLogin se={this.props.changeRegisterState} />
          }
        </Header>
        <Content style={{ padding: '0 50px' }}>

          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 100 }}>
            {this.props.isLogin ?
              <TodoList todos={this.props.todos} />
              :
              this.props.isRegister ?
                <Login login={this.props.login} /> :
                <Register />
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}


export default  connect(mapState, { login,logout,addTodo,delTodo,editTodo,changeRegisterState,register})(HomePage)