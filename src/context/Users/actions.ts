import { UPDATE_USER_STATUSES, GET_USER_BY_ID, SEARCH_USER } from './reducer'

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

export const searchUser = (dispatch) => async (keyword) => {
  try {
    dispatch({
      type: SEARCH_USER,
      payload: keyword,
    })
  } catch (err) {
    console.error(err)
  }
}
