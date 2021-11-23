import axios from 'axios'
import { Dispatch } from 'redux'
import { CategoryAction, CategoryActionTypes } from 'types/category'

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES })
      const response = await axios.get(
        'https://fakestoreapi.com/products/categories',
      )
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_ERROR,
        payload: 'Произошла ошибка при загрузке категорий',
      })
    }
  }
}
