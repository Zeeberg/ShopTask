import HeartIcon from 'assets/icons/HeartIcon'
import React from 'react'
import { IProduct } from 'types/product'

import styles from './styles.module.scss'

interface ProductDetailProps {
  product: IProduct
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className={styles['product-detail']}>
      <div className={styles['product-detail__top']}>
        <h1 className={styles['product-detail__title']}>{product.title}</h1>
        <button className={styles['product-detail__like-btn']}>
          <HeartIcon />
        </button>
      </div>
      <div className={styles['product-detail__image-wrapper']}></div>
      <span className={styles['product-detail__price']}>{product.price} $</span>
      <div className={styles['product-detail__image']}>
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  )
}

export default ProductDetail
