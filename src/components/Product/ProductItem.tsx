import ProductImage from 'components/UI/ProductImage/ProductImage'
import Stars from 'components/UI/Stars/Stars'
import React from 'react'
import { IProduct } from 'types/product'

import styles from './styles.module.scss'

type ProductItemProps = {
  product: IProduct
  onModal: () => void
}

const ProductItem = ({ product, onModal }: ProductItemProps) => {
  return (
    <div className={styles['product-item']} onClick={() => onModal()}>
      <ProductImage product={product} />
      <span className={styles['product-item__title']}>{product.title}</span>
      <div>
        <span>{product.price}$</span>
        <Stars rate={product.rating.rate} />
        <span>{product.rating.rate}</span>
      </div>
    </div>
  )
}

export default ProductItem
