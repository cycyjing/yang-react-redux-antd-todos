import React, { Component } from 'react'
import {HomePage} from './views'
import 'antd/dist/antd.css';
import {Provider} from 'react-redux'
import store from './store/store'
// Provider 这些东西加载这
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <HomePage/>
      </Provider>
    )
  }
}
