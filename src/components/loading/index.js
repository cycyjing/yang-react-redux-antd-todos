import { Spin } from 'antd'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './loading.css'


export default function (MyComponent) {
  const mapState = (state) => {
    return {
      isLoading: state.getIn(['connectState', 'isLoading']),
    }
  }
  class GlobalSpin extends Component {
    render() {
      return (<Spin tip="Loading..." spinning={this.props.isLoading} className='GlobalSpin' size='large'>
          <MyComponent {...this.props} />
        </Spin>)
    }
  }
  return connect(mapState)(GlobalSpin)
}
