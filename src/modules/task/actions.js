import axios from 'axios'
import decode from 'jwt-decode'
export const ADDTASK_STARTED = '@task/ADDTASK_STARTED'
export const TASKGET_SUCCESS = '@task/TASKGET_SUCCESS'
export const CANCEL_ADDTASK = '@task/CANCEL_TASK'
export const TASKEDIT_STARTED = '@task/TASKEDIT_STARTED'
export const CANCEL_TASKEDIT = '@task/CANCEL_TASKEDIT'

// export const TASKEDIT_STARTED = '@task/TASKEDIT_STARTED'

export const Add_Task = data => {
  return async dispatch => {
    dispatch({
      type: ADDTASK_STARTED,
      showPopup: data.showPopup
    })

    if (data) {
      const token = localStorage.getItem('AUTH_TOKEN')
      const decoded = decode(token)
      // console.log(data)
      const newData = {
        name: data.name,
        nameItems: data.NameItems,
        totalItem: data.totalItem,
        price: data.price,
        totalPrice: data.totalPrice,
        date: data.date,
        creator: decoded._id
      }
      // console.log(newData)
      const response = await axios.post(
        `http://localhost:1234/create-task/5d5aba6ea8b3e636dba4a250`,
        newData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
          }
        }
      )
      console.log(response)
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

export const Get_Task = () => {
  return async dispatch => {
    const response = await axios.get(
      `http://localhost:1234/get-task/5d5aba6ea8b3e636dba4a250`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
        }
      }
    )
    // console.log(response)

    dispatch({
      type: TASKGET_SUCCESS,
      data: response.data.data,
      message: response.data.message
    })
  }
}
