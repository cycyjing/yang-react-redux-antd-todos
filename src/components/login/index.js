import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
import { login ,changeRegisterState} from '../../store/actions'

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
class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.username,values.password)
      }
    });
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 16 },
        sm: { span: 8 },
        
      },
      wrapperCol: {
       
        xs: { span: 16 ,offset:4},
        sm: { span: 10 ,offset:6},
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
      <Form onSubmit={this.handleSubmit} {...formItemLayout} className="login-form">
        <Form.Item >
          {getFieldDecorator('username', {
            rules: [{ required: true,message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm