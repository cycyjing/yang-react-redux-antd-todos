import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addTodo} from '../../store/actions'

const mapState = (state) => {

  return {
    todos: state.getIn(['todoListState','todos']),
    isLoading: state.getIn(['connectState', 'isLoading']),
    userId:state.getIn(['loginState','userId'])
  }
}

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
