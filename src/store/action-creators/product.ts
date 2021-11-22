import axios from "axios"
import { Dispatch } from "redux"
import { ProductAction, ProductActionTypes } from "../../types/product"

export const fetchProducts = (category: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.FETCH_PRODUCTS })
            setTimeout(async () => {
                const response = await axios.get("https://fakestoreapi.com/products" + (category ? `/category/${category}` : ''))
                dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data })
            }, 500);
        } catch (error) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Произошла ошибка при загрузке продуктов'
            })
        }
    }
}