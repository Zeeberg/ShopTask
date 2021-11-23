import HeartIcon from 'assets/icons/HeartIcon'
import ShoppingCartIcon from 'assets/icons/ShoppingCartIcon'
import UserIcon from 'assets/icons/UserIcon'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const ControlPanel = () => {
  return (
    <div className={styles.ControlPanel}>
      <Link className={styles.ControlPanel__item} to="/products">
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
