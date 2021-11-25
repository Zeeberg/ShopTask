import { localStorageKeys } from 'const/localStorage'
import { CartAction, CartActionTypes, CartState } from 'types/cart'

const cartLocalStorage = localStorage.getItem(localStorageKeys.productsInCart)

const initialState: CartState = {
  productsInCart: cartLocalStorage ? JSON.parse(cartLocalStorage) : [],
}

export const cartReducer = (
  state = initialState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case CartActionTypes.SET_PRODUCTS_CART:
      return { productsInCart: action.payload }

    default:
      return state
  }
}
