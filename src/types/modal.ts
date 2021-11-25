import { IProduct } from './product'

export interface IModalProduct {
  visibility: boolean
  product: IProduct | null
}
