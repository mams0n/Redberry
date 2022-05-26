import { Categories } from 'database/categories'
export const GET_CATEGORY_BY_ID = 'GET_CATEGORY_BY_ID'

export const initialState: any = {
  categories: Categories,
  category: {},
}

console.log(initialState, 'initialState')

const reducer = (state, action) => {
  console.log(action, 'action')
  switch (action.type) {
    case GET_CATEGORY_BY_ID: {
      console.log(action, 'stateeeee----------')
      return {
        ...state,
        category: state?.categories?.find(
          (item) => Number(item.id) === Number(action.payload)
        ),
      }
    }
    default:
      break
  }

  return state
}

export default reducer
