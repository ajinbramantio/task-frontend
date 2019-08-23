import axios from 'axios'
import decode from 'jwt-decode'
export const ADDTASK_STARTED = '@task/ADDTASK_STARTED'
export const ADDTASK_SUCCESS = '@task/ADDTASK_SUCCESS'
export const CANCEL_ADDTASK = '@task/CANCEL_TASK'

export const TASKGET_SUCCESS = '@task/TASKGET_SUCCESS'
export const TASKEDIT_STARTED = '@task/TASKEDIT_STARTED'
export const CANCEL_TASKEDIT = '@task/CANCEL_TASKEDIT'

export const TASKDELETE_SUCCESS = '@task/TASKDELETE_SUCCESS'

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
      console.log(newData)
      const response = await axios.post(
        `http://localhost:1234/create-task/${decoded._id}`,
        newData,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )
      // console.log(response.data)
      dispatch({
        type: ADDTASK_SUCCESS,
        data: response.data.data,
        message: response.data.message
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

export const Get_Task = () => {
  return async dispatch => {
    // console.log('ada')
    const token = localStorage.getItem('AUTH_TOKEN')
    const decoded = decode(token)

    const response = await axios.get(
      `http://localhost:1234/get-task/${decoded._id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
        }
      }
    )
    console.log(response)

    dispatch({
      type: TASKGET_SUCCESS,
      data: response.data.data,
      message: response.data.message
    })
  }
}

export const Delete_Task = (taskId, creatorId) => {
  return async dispatch => {
    console.log(taskId, creatorId)
    const response = await axios.delete(
      `http://localhost:1234/remove-task/${taskId}/${creatorId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
        }
      }
    )
    console.log(response)

    dispatch({
      type: TASKDELETE_SUCCESS,
      data: response.data.data,
      message: response.data.message
    })
  }
}
