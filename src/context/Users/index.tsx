import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { updateUserStatuses, fetchUserById, searchUser } from "./actions";

const UsersContext = createContext(initialState);

export const useUsers = () => useContext(UsersContext);

const UsersProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const updateUserStatus = updateUserStatuses(dispatch);
    const getUserById = fetchUserById(dispatch);
    const searchUsers = searchUser(dispatch);
    return (
        <UsersContext.Provider
            value={{ state, updateUserStatus, getUserById, searchUsers }}
        >
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;