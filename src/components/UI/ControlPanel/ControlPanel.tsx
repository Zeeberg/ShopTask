import HeartIcon from 'assets/icons/HeartIcon'
import ShoppingCartIcon from 'assets/icons/ShoppingCartIcon'
import UserIcon from 'assets/icons/UserIcon'
import { useTypedSelector } from 'hooks/useTypedSelector'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const ControlPanel = () => {
  const { productsInCart } = useTypedSelector(state => state.cart)

  return (
    <div className={styles.ControlPanel}>
      <Link
        className={`${styles.ControlPanel__item} ${styles.ControlPanel__cart}`}
        to="/cart">
        {productsInCart.length > 0 && (
          <span className="counter">{productsInCart.length}</span>
        )}
        <ShoppingCartIcon />
      </Link>
      <Link className={styles.ControlPanel__item} to="/products">
        <HeartIcon />
      </Link>
      <Link className={styles.ControlPanel__item} to="/products">
        <UserIcon />
      </Link>
    </div>
  )
}

export default ControlPanel
