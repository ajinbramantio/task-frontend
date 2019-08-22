import { REGISTER_FAIL, REGISTER_SUCCESS } from './actions'
const initialState = {
  data: [],
  isLoading: false,
  message: '',
  hasError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      // console.log(action.payload)

      return {
        ...state,
        isLoading: true,
        message: action.payload.message,
        data: action.payload.data,
        hasError: false
      }

    case REGISTER_FAIL:
      // console.log(action.message)

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
