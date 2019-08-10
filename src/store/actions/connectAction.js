import { CONNECT } from './actionTypes'

export const constart = () => {
  //不需要
  return {
    type: CONNECT.START,
    payload: {
      isLoading: true
    }
  }
}
export const success = () => {
  //不需要
  return {
    type: CONNECT.SUCCESS,
    payload: {
      isLoading: false
    }
  }
}
export const error = (errorMsg) => {
  //
  return {
    type: CONNECT.ERROR,
    payload: {
      isLoading: false,
      errorMsg
    }
  }

}