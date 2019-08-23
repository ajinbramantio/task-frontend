import {
  ADDTASK_STARTED,
  ADDTASK_SUCCESS,
  CANCEL_ADDTASK,
  TASKEDIT_STARTED,
  TASKGET_SUCCESS,
  TASKDELETE_SUCCESS
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
  // console.log(action)

  switch (action.type) {
    case ADDTASK_STARTED:
      // console.log(action.showPopup)

      return {
        ...state,
        showPopupAdd: action.showPopup
      }
    case ADDTASK_SUCCESS:
      return {
        ...state,
        showPopup: false,
        isLoading: false,
        Error: false,
        message: action.message,
        data: [action.data]
      }
    case TASKGET_SUCCESS:
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
    case TASKDELETE_SUCCESS:
      console.log(action)

      return {
        ...state,
        isLoading: false,
        message: action.message,
        data: action.data
      }
    default:
      return state
  }
}
