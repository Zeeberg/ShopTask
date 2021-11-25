import React from 'react'

import styles from './styles.module.scss'

interface CartSummaryProps {
  summary: number
}

const CartSummary = ({ summary }: CartSummaryProps) => {
  return (
    <div className={styles['summary']}>
      <div className={styles['summary__title']}>Order summary</div>
      <div className={styles['summary__items']}>
        <div className={styles['summary-item']}>
          <div className={styles['summary-item__title']}>Sub Total</div>
          <div className={styles['summary-item__value']}>
            {summary.toFixed(2)} $
          </div>
        </div>
      </div>
      <div className={styles['summary__total']}>
        <span>{summary.toFixed(2)} $</span>
      </div>
    </div>
  )
}

export default CartSummary
