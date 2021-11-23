import ProductImage from 'components/UI/ProductImage/ProductImage'
import Stars from 'components/UI/Stars/Stars'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { IProduct } from 'types/product'

import styles from './styles.module.scss'

interface ProductItemProps {
  product: IProduct
}

const ProductItem = ({ product }: ProductItemProps) => {
  const history = useHistory()
  const handleLinkClick = () =>
    history.push(`/products/${product.category}/${product.id}`)

  return (
    <div className={styles['product-item']} onClick={handleLinkClick}>
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
