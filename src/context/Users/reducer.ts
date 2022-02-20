import { Statuses } from 'database/statuses'
import { Users } from 'database/users'
export const GET_USERS = 'GET_USERS'
export const UPDATE_USER_STATUSES = 'UPDATE_USER_STATUSES'
export const GET_USER_BY_ID = 'GET_USER_BY_ID'

export const initialState: any = {
  users: Users,
  user: {},
}

const reducer = (state, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
      }
    }

    case UPDATE_USER_STATUSES: {
      return {
        ...state,
        users: state?.users?.map((item): any => {
          if (item.key === action.payload.userId) {
            const updatedStatus = Statuses.find(
              (status) => status.status_id === action.payload.statusId
            )
            return {
              ...item,
              status: updatedStatus,
            }
          }
          return item
        }),
      }
    }

    case GET_USER_BY_ID: {
      return {
        ...state,
        user: state.users.users.find(
          (item) => Number(item.key) === Number(action.payload)
        ),
      }
    }
    default:
      break
  }

  return state
}

export default reducer
