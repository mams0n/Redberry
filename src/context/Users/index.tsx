import { createContext, useContext, useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { fetchUsers, updateUserStatuses, fetchUserById } from './actions'

const UsersContext = createContext(initialState)

export const useUsers = () => useContext(UsersContext)

const UsersProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const getUsers = fetchUsers(dispatch)
    const updateUserStatus = updateUserStatuses(dispatch)
    const getUserById = fetchUserById(dispatch)

    return (
        <UsersContext.Provider value={{ state, getUsers, updateUserStatus, getUserById }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider