import { fromJS,merge } from 'immutable'
import { CONNECT } from '../actions/actionTypes'
const initState = fromJS({
  isLoading: false,
  errorMsg: '',
  isError:''
})
export default (state = initState, action) => {
  switch (action.type) {
    case CONNECT.START:
     
      return merge(state,action.payload)
    case CONNECT.SUCCESS:
        
      return merge(state,action.payload)
    case CONNECT.ERROR:
        
      return merge(state,action.payload)
    default: return state
  }
}