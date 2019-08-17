import { CANCEL_ADDTASK } from './actions'
const initialState = {
  showPopupAdd: false,
  message: '',
  data: '',
  isLoading: '',
  Error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CANCEL_ADDTASK:
      break

    default:
      return state
  }
}
