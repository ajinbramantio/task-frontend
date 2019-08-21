import axios from 'axios'
import decode from 'jwt-decode'
export const LOGIN = '@user/LOGIN'
export const LOGIN_SUCCESS = '@user/LOGIN_SUCCESS'
export const LOGIN_FAIL = '@user/LOGIN_FAIL'
export const LOGOUT_SUCCESS = '@user/LOGOUT_SUCCESS'

export const userLogin = data => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({
      type: LOGIN
    })

    const response = await axios.post(`http://localhost:1234/login`, data)
    const result = response.data
    if (result && result.token) {
      localStorage.setItem('AUTH_TOKEN', result.token)
      const decoded = decode(result.token)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: result.token,
          role: decoded.role,
          id: decoded._id
        }
      })
    }
    // console.log(response)
    dispatch({
      type: LOGIN_FAIL,
      payload: response.data
    })
  })
export const LogoutUser = () => {
  return async dispatch => {
    const response = await axios.get(`http://localhost:1234/logout`)
    // console.log(response)
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: response.data
    })
    localStorage.removeItem('AUTH_TOKEN')
  }
}
