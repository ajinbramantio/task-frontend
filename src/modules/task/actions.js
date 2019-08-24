import axios from 'axios'
import decode from 'jwt-decode'
import { APP_HOST } from '../../constant'
export const ADDTASK_STARTED = '@task/ADDTASK_STARTED'
export const ADDTASK_SUCCESS = '@task/ADDTASK_SUCCESS'
export const CANCEL_ADDTASK = '@task/CANCEL_TASK'

export const TASKGET_SUCCESS = '@task/TASKGET_SUCCESS'
export const TASKEDIT_STARTED = '@task/TASKEDIT_STARTED'
export const TASKUPDATE_SUCCESS = '@task/TASKEDIT_SUCCESS'
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
      // console.log(newData)
      const response = await axios.post(
        `${APP_HOST}/create-task/${decoded._id}`,
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
  return async dispatch => {
    // console.log(data)

    const { taskId, creatorId, showPopup } = data
    // console.log(showPopup)

    if (showPopup === true) {
      const response = await axios.get(
        `${APP_HOST}/edit-task/${taskId}/${creatorId}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
          }
        }
      )
      // console.log(response)

      dispatch({
        type: TASKEDIT_STARTED,
        data: response.data.data,
        message: response.data.message,
        showPopup: showPopup
      })
    } else {
      // console.log(showPopup)

      dispatch({
        type: CANCEL_TASKEDIT,
        showPopup: !showPopup
      })
    }

    // console.log(data)
  }
}

export const Update_Task = data => {
  return async dispatch => {
    const { creatorId, taskId, showPopup, ...updateData } = data
    // console.log(updateData)
    // console.log(showPopup)
    if (showPopup === true) {
      const response = await axios.put(
        `${APP_HOST}/update-task/${taskId}/${creatorId}`,
        updateData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
          }
        }
      )
      // console.log(response)

      dispatch({
        type: TASKUPDATE_SUCCESS,
        showPopup: !showPopup,
        data: response.data.data,
        mesage: response.data.message
      })
    } else {
      dispatch({
        type: CANCEL_TASKEDIT,
        showPopup: !showPopup
      })
    }
  }
}

export const Get_Task = () => {
  return async dispatch => {
    // console.log('ada')
    const token = localStorage.getItem('AUTH_TOKEN')
    const decoded = decode(token)

    const response = await axios.get(`${APP_HOST}/get-task/${decoded._id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
      }
    })
    // console.log(response)

    dispatch({
      type: TASKGET_SUCCESS,
      data: response.data.data,
      message: response.data.message
    })
  }
}

export const Delete_Task = (taskId, creatorId) => {
  return async dispatch => {
    // console.log(taskId, creatorId)
    const response = await axios.delete(
      `${APP_HOST}/remove-task/${taskId}/${creatorId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
        }
      }
    )
    // console.log(response)

    dispatch({
      type: TASKDELETE_SUCCESS,
      data: response.data.data,
      message: response.data.message
    })
  }
}
