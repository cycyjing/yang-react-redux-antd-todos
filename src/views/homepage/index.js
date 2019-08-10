import React, { Component } from 'react';
import { Layout } from 'antd';
import { Login, Register, MenuLogin, MenuUser, TodoList,Loading } from '../../components'
import { connect } from 'react-redux'
import { login, logout, addTodo, delTodo, editTodo, changeRegisterState, register ,gettodos} from '../../store/actions'

const { Header, Content, Footer } = Layout;
const mapState = (state) => {
 console.log(state.get('todoListState'))
  return {
    todos: state.get('todoListState').todos,
    isLogin: state.getIn(['loginState', 'isLogin']),
    isError: state.getIn(['loginState', 'isError']),
    username: state.getIn(['loginState', 'username']),
    password: state.getIn(['loginState', 'password']),
    isRegister: state.getIn(['registerState', 'isRegister']),
    isLoading: state.getIn(['connectState', 'isLoading']),
    errorMsg: state.getIn(['connectState', 'errorMsg'])

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
              <TodoList todos={this.props.todos} gettodos={this.props.gettodos} />
              :
              this.props.isRegister ?
                <Login login={this.props.login} /> :
                <Register />
            }
         
            {this.props.isLoading?<Loading/>:''}
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}


export default connect(mapState, { login, logout, addTodo, delTodo, editTodo, changeRegisterState, register,gettodos })(HomePage)