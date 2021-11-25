import { IProduct } from './product'

/* eslint-disable no-unused-vars */
export enum CartActionTypes {
  SET_PRODUCTS_CART = 'SET_PRODUCTS_CART',
}

export interface SetProductsCartAction {
  payload: ICart[]
  type: CartActionTypes.SET_PRODUCTS_CART
}

export interface CartState {
  productsInCart: ICart[]
}

export type CartAction = SetProductsCartAction

export interface ICart {
  product: IProduct
  quantity: number
}
