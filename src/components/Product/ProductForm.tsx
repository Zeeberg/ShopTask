/* eslint-disable no-console */
import { IProduct } from 'types/product'

import ProductDetail from './ProductDetail'
import ProductInfo from './ProductInfo'
import styles from './styles.module.scss'

interface ProductFormProps {
  product: IProduct | null
  onHide: () => void
}

const ProductForm = ({ product, onHide }: ProductFormProps) => {
  if (product !== null) {
    return (
      <div className="container">
        <div className={styles['product-form']}>
          <ProductDetail product={product} />
          <ProductInfo product={product} onHide={onHide} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <div className={styles['product-form']}>
          <h1>Product not found</h1>
        </div>
      </div>
    )
  }
}

export default ProductForm
