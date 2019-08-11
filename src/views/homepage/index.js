import React, { Component } from 'react';
import { Layout } from 'antd';
import { Footer,Header,Content} from '../../components'
import { connect } from 'react-redux'
import { login, logout, addTodo, delTodo, editTodo, changeRegisterState, register ,gettodos} from '../../store/actions'

// const mapState = (state) => {

//   return {
//     todos: state.getIn(['todoListState','todos']),
//     isLogin: state.getIn(['loginState', 'isLogin']),
//     isError: state.getIn(['connectState', 'isError']),
//     isRegister: state.getIn(['registerState', 'isRegister']),
//     isLoading: state.getIn(['connectState', 'isLoading']),
//     errorMsg: state.getIn(['connectState', 'errorMsg'])
//   }
// }

export default class HomePage extends Component {
  render() {
    return (
      <Layout className="layout">
       <Header />
       <Content/>
        <Footer />
      </Layout>
    )
  }
}


// export default connect(mapState, { login, logout, addTodo, delTodo, editTodo, changeRegisterState, register,gettodos })(HomePage)