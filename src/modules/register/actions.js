import axios from 'axios'
export const REGISTER = '@register/REGISTER'
export const REGISTER_SUCCESS = '@register/REGISTER_SUCCESS'
export const REGISTER_FAIL = '@register/REGISTER_FAIL'

export const RegisterUser = data => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:1234/register`, data)
      const result = response.data.dataUser

      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          id: result._id,
          userName: result.userName,
          email: result.email,
          role: result.role
        }
      })
    } catch (e) {
      //   console.log(e.response.data.message)
      dispatch({
        type: REGISTER_FAIL,
        message: e.response.data.message
      })
    }
  }
}
