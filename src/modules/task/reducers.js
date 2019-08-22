import {
  ADDTASK_STARTED,
  CANCEL_ADDTASK,
  TASKEDIT_STARTED,
  TASKGET_SUCCESS
} from './actions'
const initialState = {
  showPopupAdd: false,
  showPopupEdit: false,
  message: '',
  data: [],
  isLoading: false,
  Error: false
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
    case TASKGET_SUCCESS:
      // console.log(action)

      return {
        ...state,
        showPopup: false,
        isLoading: false,
        Error: false,
        message: action.message,
        data: action.data
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
