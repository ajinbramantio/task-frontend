import axios from 'axios'
import decode from 'jwt-decode'
export const LOGIN = '@user/LOGIN'
export const LOGIN_SUCCESS = '@user/LOGIN_SUCCESS'

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
  })
