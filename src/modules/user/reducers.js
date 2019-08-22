import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  GET_PROFILE_SUCCESS
} from './actions'
const initialState = {
  latesResponse: null,
  isLoading: false,
  isAuthorized: false,
  message: '',
  data: []
}

export default (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthorized: true,
        data: action.payload
      }
    case LOGIN_FAIL:
      // console.log(action.payload)
      return {
        ...state,
        data: action.payload
      }
    case GET_PROFILE_SUCCESS:
      // console.log(action.payload)

      return {
        ...state,
        isLoading: false,
        isAuthorized: true,
        data: action.payload.data,
        message: action.payload.message
      }
    case LOGOUT_SUCCESS:
      // console.log(action.payload)

      return {
        ...state,
        isLoading: false,
        isAuthorized: false,
        data: action.payload
      }

    default:
      return state
  }
}
