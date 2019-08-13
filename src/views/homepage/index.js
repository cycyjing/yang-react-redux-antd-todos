import React, { Component } from 'react';
import { Layout,Icon } from 'antd';
import { Footer,Header,Content,notification} from '../../components'
import { connect } from 'react-redux'
import { login,error} from '../../store/actions'


const mapState=(state) => {
  return {errMsg: state.getIn(['connectState', 'errorMsg'])}
}
@connect(mapState,{login,error})
class HomePage extends Component {
  componentDidMount(){
    const username=window.localStorage.getItem('username')
    const password=window.localStorage.getItem('password')
    const userId=window.localStorage.getItem('userId')
    if(username&&userId&&password){
      this.props.login(username,password)
    }
   this.handleError()
  }
  componentDidUpdate(){
   this.handleError()
  }
  handleError(){
    if(this.props.errMsg!==''){
      const notificationConfig={message:this.props.errMsg,icon:<Icon type="frown" style={{ color: 'red' }}/>}
     notification(notificationConfig)('warning')
     this.props.error('')
    }
  }
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
export default HomePage

