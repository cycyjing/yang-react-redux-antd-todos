import React, { Component } from 'react'
import {HomePage} from './views'
import 'antd/dist/antd.css';
// Provider 这些东西加载这
export default class App extends Component {
  render() {
    return (
      <>
       <HomePage/>
      </>
    )
  }
}
