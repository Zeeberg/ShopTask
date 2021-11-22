export enum ProductActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS;
}
interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: IProduct[]
}
interface FetchProductsErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string
}
export interface ProductState {
    products: IProduct[];
    loading: boolean;
    error: null | string;
}

export type ProductAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string
    category: string
    rating: {
        rate: number
    }
}