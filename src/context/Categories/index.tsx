import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { fetchCategoryById } from "./actions";

const CategoriesContext = createContext(initialState);

export const useCategories = () => useContext(CategoriesContext);

const CategoriesProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getCategoryById = fetchCategoryById(dispatch);
    return (
        <CategoriesContext.Provider
            value={{ state, getCategoryById }}
        >
            {props.children}
        </CategoriesContext.Provider>
    );
};

export default CategoriesProvider;