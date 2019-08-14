import { REGISTER_FAIL, REGISTER_SUCCESS } from './actions'
const initialState = {
  userName: '',
  email: '',
  password: '',
  role: '',
  isLoading: false,
  message: '',
  hasError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      console.log(action)

      return {
        userName: action.payload.userName,
        email: action.payload.email,
        role: action.payload.role,
        isLoading: true,
        message: '',
        hasError: false
      }

    case REGISTER_FAIL:
      //   console.log(action.message)

      return {
        ...state,
        isLoading: false,
        message: action.message,
        hasError: true
      }

    default:
      return state
  }
}
