import Loader from 'components/UI/Loader/Loader'
import Modal from 'components/UI/Modal/Modal'
import { useProducts } from 'hooks/useProducts'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IModalProduct } from 'types/modal'
import { IProduct } from 'types/product'
import { capitalizeFirstLetter } from 'utils/helpers'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchProducts } from '../../store/action-creators/product'
import ProductForm from './ProductForm'
import ProductItem from './ProductItem'
import styles from './styles.module.scss'

interface ProductListProps {
  category?: string
}

const ProductList = ({ category = '' }: ProductListProps) => {
  const { products, error, loading } = useTypedSelector(state => state.product)
  const filteredProducts = useProducts(products)
  const [modal, setModal] = useState<IModalProduct>({
    visibility: false,
    product: null,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts(category))
  }, [category, dispatch])

  const handleModal = (product: IProduct | null, visibility = false) => {
    setModal({ visibility: visibility, product: product })
  }

  return (
    <div>
      <Modal modalProduct={modal} onHide={() => handleModal(null)}>
        <ProductForm product={modal.product} onHide={() => handleModal(null)} />
      </Modal>
      {category ? (
        <h1>{capitalizeFirstLetter(category)}</h1>
      ) : (
        <h1>The new arrivals</h1>
      )}
      {error || (loading && <Loader />)}
      <div className={styles['product-list__wrapper']}>
        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onModal={() => handleModal(product, true)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
