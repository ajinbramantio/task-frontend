import { ADDTASK_STARTED, CANCEL_ADDTASK, TASKEDIT_STARTED } from './actions'
const initialState = {
  showPopupAdd: false,
  showPopupEdit: false,
  message: '',
  data: '',
  isLoading: false,
  Error: ''
}

export default (state = initialState, action) => {
  // console.log(action.showPopup)

  switch (action.type) {
    case ADDTASK_STARTED:
      // console.log(action.showPopup)

      return {
        ...state,
        showPopupAdd: action.showPopup
      }

    case TASKEDIT_STARTED:
      return {
        ...state,
        showPopupEdit: action.showPopup
      }

    case CANCEL_ADDTASK:
      return {
        ...state,
        showPopupAdd: false,
        isLoading: true
      }

    default:
      return state
  }
}
