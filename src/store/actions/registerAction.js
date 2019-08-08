import { REGISTER } from './actionTypes'
export const register = (user) => {
  return {
    type: REGISTER.REGISTER,
    payload: {
      user
    }
  }

}
export const changeRegisterState = (key) => {
  const action = {
    type: REGISTER.CHANGE_REGISTER_STATE
  }
  if (key === '1') {
    action.payload = {
      isRegister: true
    }
  } else if (key === '2') {
    action.payload = {
      isRegister: false
    }
  }
  return action
}