import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Login, Register, TodoList, Loading } from '../../components'
import { login, register, gettodos } from '../../store/actions'


const { Content } = Layout
const mapState = (state) => {
  return {
    todos: state.getIn(['todoListState', 'todos']),
    isLogin: state.getIn(['loginState', 'isLogin']),
    isRegister: state.getIn(['registerState', 'isRegister']),
    isLoading: state.getIn(['connectState', 'isLoading']),
  }
}
class Cont extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 100 }}>
          {this.props.isLogin ?
            <TodoList todos={this.props.todos} gettodos={this.props.gettodos} />
            :
            this.props.isRegister ?
              <Login login={this.props.login} /> :
              <Register />
          }
          {/* {this.props.isLoading ? <Loading style={{}}/> : ''} */}
        </div>
      </Content>
    )
  }
}


export default connect(mapState, { login, register, gettodos })(Loading(Cont))