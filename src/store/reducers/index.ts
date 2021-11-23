import { combineReducers } from 'redux'

import { categoryReducer } from './categoryReducer'
import { filterRangeReducer } from './filterRangeReducer'
import { productReducer } from './productReducer'

export const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  filterRange: filterRangeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
