import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { filterRangeReducer } from "./filterRangeReducer";
import { categoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
    filterRange: filterRangeReducer
})

export type RootState = ReturnType<typeof rootReducer>