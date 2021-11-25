import CartList from 'components/Cart/CartList'
import CartSummary from 'components/Cart/CartSummary'
import { useTypedSelector } from 'hooks/useTypedSelector'
import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'

const CartPage = () => {
  const { productsInCart } = useTypedSelector(state => state.cart)

  const [summary, setSummary] = useState(0)

  const handleSetSummary = () => {
    setSummary(
      productsInCart
        .map(el => el.product.price * el.quantity)
        .reduce((acc, cur) => acc + cur, 0),
    )
  }

  useEffect(() => {
    handleSetSummary()
  })

  return (
    <div className={styles['cart-page']}>
      <div className={styles['cart-page__wrapper']}>
        <CartList productsInCart={productsInCart} />
        {productsInCart.length > 0 && <CartSummary summary={summary} />}
      </div>
      {productsInCart.length === 0 && <p>There are no products</p>}
    </div>
  )
}

export default CartPage
