import ProductList from 'components/Product/ProductList'
import Sidebar from 'components/UI/Sidebar/Sidebar'
import React from 'react'
import { useParams } from 'react-router-dom'

import styles from './styles.module.scss'

interface ProductsCategoryPageParams {
  category: string
}

const ProductsCategoryPage = () => {
  const params = useParams<ProductsCategoryPageParams>()

  return (
    <div className={styles['products-page']}>
      <div className={styles['products-page__wrapper']}>
        <Sidebar />
        <div className={styles.content}>
          <ProductList category={params.category} />
        </div>
      </div>
    </div>
  )
}

export default ProductsCategoryPage
