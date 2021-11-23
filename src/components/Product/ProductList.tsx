import Loader from 'components/UI/Loader/Loader'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { capitalizeFirstLetter, filterElementByRange } from 'utils/helpers'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchProducts } from '../../store/action-creators/product'
import ProductItem from './ProductItem'
import styles from './styles.module.scss'

interface ProductListProps {
  category?: string
}

const ProductList = ({ category = '' }: ProductListProps) => {
  const { products, error, loading } = useTypedSelector(state => state.product)
  const { ranges } = useTypedSelector(state => state.filterRange)

  const dispatch = useDispatch()

  const getFilteredProducts = () => {
    return products.filter(
      product =>
        filterElementByRange(ranges, product.price, 'price') &&
        filterElementByRange(ranges, product.rating.rate, 'rate'),
    )
  }

  const filterdProducts = getFilteredProducts()

  useEffect(() => {
    dispatch(fetchProducts(category))
  }, [category, dispatch])

  return (
    <div>
      {category ? (
        <h1>{capitalizeFirstLetter(category)}</h1>
      ) : (
        <h1>The new arrivals</h1>
      )}
      {error || (loading && <Loader />)}
      <div className={styles['product-list__wrapper']}>
        {filterdProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
