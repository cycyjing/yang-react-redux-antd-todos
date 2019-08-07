import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Login, Register ,MenuLogin,MenuUser,TodoList} from '../../components'

const { Header, Content, Footer } = Layout;

export default class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      isLogin:false,
      isRegister: true,
      username:'a',
      password:"a",
      todos:[
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  }
  login=(username,password)=>{
    if(username===this.state.username&&password===this.state.password){
      
      this.setState({
        isLogin:true
      })
    }else{
     
      this.setState({
        isLogin:false
      })
    }
  }
  logout=() => {
    this.setState({
      isLogin:false
    })
  }
  handleMenuSelected = (params) => {
    if (params.key === '1') {
      this.setState({ isRegister: true })
    } else if (params.key === '2') {
      this.setState({ isRegister: false })
    }
  }
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          {this.state.isLogin?
        <MenuUser username={this.state.username} logout={this.logout}/>:
        <MenuLogin selected={this.handleMenuSelected}/>
        }
         
         
        </Header>
        <Content style={{ padding: '0 50px' }}>

          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 100 }}>
            {this.state.isLogin?
            <TodoList todos={this.state.todos}/>
            :
            this.state.isRegister ?
              <Login login={this.login}/> :
              <Register />
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}