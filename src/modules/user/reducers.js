import { LOGIN, LOGIN_SUCCESS } from './actions'
const initialState = {
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
      console.log(action)
      return {
        isLoading: false,
        isAuthorized: true,
        token: action.payload.token,
        isRole: action.payload.role,
        Id: action.payload.id
      }

    default:
      return state
  }
}
