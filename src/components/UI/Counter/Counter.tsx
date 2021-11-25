import React from 'react'
import { handleCounter } from 'utils/helpers'

import styles from './styles.module.scss'

interface CounterProps {
  counter: number
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({ counter, setCounter }: CounterProps) => {
  return (
    <div className={styles['shopping-cart-count']}>
      <div
        className={styles['shopping-cart-count__minus']}
        onClick={() => handleCounter(-1, counter, setCounter)}></div>
      <input
        type="number"
        className={styles['shopping-cart-count__input']}
        value={counter}
        onChange={e => {
          setCounter(+e.target.value)
        }}
      />
      <div
        className={styles['shopping-cart-count__plus']}
        onClick={() => handleCounter(1, counter, setCounter)}></div>
    </div>
  )
}

export default Counter
