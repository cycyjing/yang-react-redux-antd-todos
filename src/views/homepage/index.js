import React, { Component } from 'react';
import { Layout } from 'antd';
import { Login, Register,  TodoList,Loading ,Footer,Header} from '../../components'
import { connect } from 'react-redux'
import { login, logout, addTodo, delTodo, editTodo, changeRegisterState, register ,gettodos} from '../../store/actions'

const {  Content } = Layout;
const mapState = (state) => {

  return {
    todos: state.getIn(['todoListState','todos']),
    isLogin: state.getIn(['loginState', 'isLogin']),
    isError: state.getIn(['connectState', 'isError']),
    isRegister: state.getIn(['registerState', 'isRegister']),
    isLoading: state.getIn(['connectState', 'isLoading']),
    errorMsg: state.getIn(['connectState', 'errorMsg'])
  }
}

class HomePage extends Component {
  render() {
    return (
      <Layout className="layout">
       <Header />
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
        <Footer />
      </Layout>
    )
  }
}


export default connect(mapState, { login, logout, addTodo, delTodo, editTodo, changeRegisterState, register,gettodos })(HomePage)