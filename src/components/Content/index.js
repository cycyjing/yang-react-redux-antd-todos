import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Login, Register, TodoList, Loading } from '../../components'


const { Content } = Layout
const mapState = (state) => {
  return {
    isLogin: state.getIn(['loginState', 'isLogin']),
    isRegister: state.getIn(['registerState', 'isRegister'])
  }
}
class Cont extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 100 }}>
          {this.props.isLogin ?
            <TodoList />
            :
            this.props.isRegister ?
              <Login/> :
              <Register />
          }
        </div>
      </Content>
    )
  }
}


export default connect(mapState)(Loading(Cont))