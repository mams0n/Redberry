import { Users } from 'database/users'
import { GET_USERS, UPDATE_USER_STATUSES, GET_USER_BY_ID } from './reducer'

export const fetchUsers = (dispatch) => async () => {
  try {
    const users = await Users
    dispatch({
      type: GET_USERS,
      payload: users,
    })
  } catch (err) {
    console.error(err)
  }
}

export const fetchUserById = (dispatch) => async (id) => {
  try {
    dispatch({
      type: GET_USER_BY_ID,
      payload: id,
    })
  } catch (err) {
    console.error(err)
  }
}

export const updateUserStatuses = (dispatch) => async (data) => {
  try {
    dispatch({
      type: UPDATE_USER_STATUSES,
      payload: data,
    })
  } catch (err) {
    console.error(err)
  }
}
