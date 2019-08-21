import { LOGIN, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_FAIL } from './actions'
const initialState = {
  latesResponse: null,
  isLoading: false,
  isAuthorized: false,
  token: '',
  isRole: Number,
  Id: '',
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      // console.log(action)
      return {
        isLoading: false,
        isAuthorized: true,
        token: action.payload.token,
        isRole: action.payload.role,
        Id: action.payload.id
      }
    case LOGIN_FAIL:
      // console.log(action.payload)

      return {
        ...state,
        data: action.payload
      }
    case LOGOUT_SUCCESS:
      console.log(action.payload)

      return {
        ...state,
        isLoading: false,
        isAuthorized: false,
        token: '',
        isRole: null,
        Id: '',
        data: action.payload
      }

    default:
      return state
  }
}
