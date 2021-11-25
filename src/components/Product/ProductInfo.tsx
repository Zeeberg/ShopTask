import Button from 'components/UI/Button/Button'
import Counter from 'components/UI/Counter/Counter'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setCart } from 'store/action-creators/cart'
import { IProduct } from 'types/product'

import styles from './styles.module.scss'

interface ProductInfoProps {
  product: IProduct
  onHide: () => void
}

const ProductInfo = ({ product, onHide }: ProductInfoProps) => {
  const [counter, setCounter] = useState(1)
  const { productsInCart } = useTypedSelector(state => state.cart)

  const history = useHistory()
  const dispatch = useDispatch()
  const hasInCart = !!productsInCart.find(el => el.product.id === product.id)

  const addCartHandler = () => {
    dispatch(
      setCart([...productsInCart, { product: product, quantity: counter }]),
    )
  }

  const handleGoToCart = () => {
    history.location.pathname !== '/cart' ? history.push('/cart') : onHide()
  }

  return (
    <div className={styles['product-info']}>
      <div className={styles['product-description']}>
        <span className={styles['product-description__title']}>
          Description
        </span>
        <div className={styles['product-description__text']}>
          {product.description}
        </div>
      </div>
      <div className={styles['product-info__control']}>
        {hasInCart ? (
          <Button onClick={handleGoToCart}>Go to cart</Button>
        ) : (
          <>
            <Counter counter={counter} setCounter={setCounter} />
            <Button onClick={addCartHandler}>Add to cart</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
