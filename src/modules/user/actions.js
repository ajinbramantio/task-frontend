import axios from 'axios'
import decode from 'jwt-decode'
import { APP_HOST } from '../../constant'
export const LOGIN = '@user/LOGIN'
export const LOGIN_SUCCESS = '@user/LOGIN_SUCCESS'
export const LOGIN_FAIL = '@user/LOGIN_FAIL'
export const LOGOUT_SUCCESS = '@user/LOGOUT_SUCCESS'
export const GET_PROFILE_SUCCESS = '@user/GET_PROFILE_SUCCESS'

export const userLogin = data => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({
      type: LOGIN
    })

    const response = await axios.post(`${APP_HOST}/login`, data)
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
    const response = await axios.get(`${APP_HOST}/logout`)
    // console.log(response)
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: response.data
    })
    localStorage.removeItem('AUTH_TOKEN')
  }
}

export const GetUser = () => dispatch => {
  new Promise(async (resolve, reject) => {
    // return async dispatch => {

    try {
      const token = localStorage.getItem('AUTH_TOKEN')
      // console.log(token)
      const decoded = decode(token)
      const response = await axios.get(`${APP_HOST}/user/${decoded._id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })

      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: {
          data: response.data.data,
          message: response.data.message
        }
      })
      resolve()
    } catch (error) {
      // console.log(error.message)

      reject(error.message)
    }
  })
}
