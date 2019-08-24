import axios from 'axios'
import { APP_HOST } from '../../constant'
export const REGISTER = '@register/REGISTER'
export const REGISTER_SUCCESS = '@register/REGISTER_SUCCESS'
export const REGISTER_FAIL = '@register/REGISTER_FAIL'

export const RegisterUser = data => {
  return async dispatch => {
    const response = await axios.post(`${APP_HOST}/register`, data)
    const result = response.data.dataUser
    const message = response.data.message
    // console.log(response.data)
    if (result) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          data: result,
          message
        }
      })
    }

    dispatch({
      type: REGISTER_FAIL,
      message
    })
  }
}
