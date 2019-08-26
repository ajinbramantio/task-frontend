import {
  ADDTASK_STARTED,
  ADDTASK_SUCCESS,
  CANCEL_ADDTASK,
  TASKEDIT_STARTED,
  TASKGET_SUCCESS,
  TASKUPDATE_SUCCESS,
  CANCEL_TASKEDIT,
  TASKDELETE_SUCCESS
} from './actions'
const initialState = {
  showPopupAdd: false,
  showPopupEdit: false,
  message: '',
  data: [],
  editData: [],
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
      // console.log(action)

      return {
        ...state,
        showPopupAdd: false,
        isLoading: false,
        Error: false,
        message: action.message,
        data: [action.data]
      }
    case CANCEL_ADDTASK:
      // console.log(action)

      return {
        ...state,
        showPopupAdd: false,
        isLoading: true
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
      // console.log(action)

      return {
        ...state,
        isLoading: false,
        Error: false,
        editData: action.data,
        message: action.message,
        showPopupEdit: true
      }

    case CANCEL_TASKEDIT:
      return {
        ...state,
        showPopupEdit: false,
        isLoading: true
      }
    case TASKUPDATE_SUCCESS:
      // console.log(action)
      return {
        ...state,
        showPopupEdit: false,
        isLoading: true
      }
    case TASKDELETE_SUCCESS:
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
