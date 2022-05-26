import { GET_CATEGORY_BY_ID } from './reducer'

export const fetchCategoryById = (dispatch) => async (id) => {
  try {
    dispatch({
      type: GET_CATEGORY_BY_ID,
      payload: id,
    })
  } catch (err) {
    console.error(err)
  }
}
