import { fromJS,merge } from 'immutable'
import { CONNECT } from '../actions/actionTypes'
const initState = fromJS({
  isLoading: false,
  errorMsg: ''
})
export default (state = initState, action) => {
  switch (action.type) {
    case CONNECT.START:
      console.log('action', action)
      return merge(state,action.payload)
    case CONNECT.SUCCESS:
        console.log('action', action)
      return merge(state,action.payload)
    case CONNECT.ERROR:
        console.log('action', action)
      return merge(state,action.payload)
    default: return state
  }
}