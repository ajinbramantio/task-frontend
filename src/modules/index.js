import { combineReducers } from 'redux'
import user from '../modules/user/reducers'
import register from '../modules/register/reducers'
import task from '../modules/task/reducers'

export default combineReducers({
  user,
  register,
  task
})
