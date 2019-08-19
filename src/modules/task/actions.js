export const ADDTASK_STARTED = '@task/ADDTASK_STARTED'
export const CANCEL_ADDTASK = '@task/CANCEL_TASK'
export const TASKEDIT_STARTED = '@task/TASKEDIT_STARTED'
export const CANCEL_TASKEDIT = '@task/CANCEL_TASKEDIT'

// export const TASKEDIT_STARTED = '@task/TASKEDIT_STARTED'

export const Add_Task = data => {
  return dispatch => {
    // console.log(data)
    if (data) {
      dispatch({
        type: ADDTASK_STARTED,
        showPopup: data.showPopup
      })
    } else {
      dispatch({
        type: CANCEL_ADDTASK,
        showPopup: !data.showPopup
      })
    }

    // console.log(data)
  }
}

export const Edit_Task = data => {
  // console.log(data)
  return dispatch => {
    if (data) {
      dispatch({
        type: TASKEDIT_STARTED,
        showPopup: data.showPopup
      })
    } else {
      dispatch({
        type: CANCEL_TASKEDIT,
        showPopup: !data.showPopup
      })
    }

    // console.log(data)
  }
}
