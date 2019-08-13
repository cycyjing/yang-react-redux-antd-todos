import { CONNECT } from './actionTypes'

export const constart = () => {
  return {
    type: CONNECT.START,
    payload: {
      isLoading: true
    }
  }
}
export const success = () => {
  return {
    type: CONNECT.SUCCESS,
    payload: {
      isLoading: false
    }
  }
}
export const error = (errorMsg) => {
  return {
    type: CONNECT.ERROR,
    payload: {
      isLoading: false,
      errorMsg
    }
  }

}