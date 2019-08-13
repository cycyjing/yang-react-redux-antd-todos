import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
import { login ,changeRegisterState} from '../../store/actions'
import './index.less'
const mapState = (state) => {

  return {
    isLogin: state.getIn(['loginState', 'isLogin']),
    
  }
}
class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.username,values.password)
      }
    });
  };
registerChange=() => {
  this.props.changeRegisterState({isRegister: false})
}
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 16 },
        sm: { span: 8 },
        
      },
      wrapperCol: {
       
        xs: { span: 16 },
        sm: { span: 10 ,offset:7},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 20,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 7,
        },
      },
    };
    const { getFieldDecorator } = this.props.form;
    return (
     <>
        <div className="header_todo">  <span className="header_t">T</span>
        <span className="header_start">O</span >
         <span className="header_d">D</span> 
         <span className="header_end">O</span></div>
         <div className="clear"></div>
      <Form onSubmit={this.handleSubmit} {...formItemLayout} className="login-form">
        <Form.Item >
          {getFieldDecorator('username', {
            rules: [{ required: true,message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" className="input-username"  />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" className="input-password"  />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
        
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>  
          <b> <i>Or</i> </b>
          <Button onClick={this.registerChange} type="link">register now!</Button>
        </Form.Item>
      </Form>
     </>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default connect(mapState,{ login ,changeRegisterState} )(WrappedNormalLoginForm)