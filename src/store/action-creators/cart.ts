import { localStorageKeys } from 'const/localStorage'
import { Dispatch } from 'react'
import { CartActionTypes, ICart, SetProductsCartAction } from 'types/cart'

export const setCart = (productsInCart: ICart[]) => {
  return (dispatch: Dispatch<SetProductsCartAction>) => {
    dispatch({
      type: CartActionTypes.SET_PRODUCTS_CART,
      payload: productsInCart,
    })

    localStorage.setItem(
      localStorageKeys.productsInCart,
      JSON.stringify(productsInCart),
    )
  }
}
