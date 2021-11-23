import 'react-input-range/lib/css/index.css'

import { useTypedSelector } from 'hooks/useTypedSelector'
import React, { useEffect } from 'react'
import InputRange, { Range } from 'react-input-range'
import { useDispatch } from 'react-redux'
import { setRange } from 'store/action-creators/filterRange'
import { getRangeArrayNumber } from 'utils/helpers'

import styles from './styles.module.scss'

const RangeList = () => {
  const { products } = useTypedSelector(state => state.product)
  const { ranges } = useTypedSelector(state => state.filterRange)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length !== 0) {
      ranges.forEach(element => {
        const productRangeValues = getRangeArrayNumber(products, element.type)
        dispatch(setRange(ranges, element.type, productRangeValues, true))
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  const handleChange = (type: string) => {
    return (value: Range | number) => {
      if (typeof value === 'object') {
        dispatch(setRange(ranges, type, value))
      }
    }
  }

  return (
    <div className={styles['range-list']}>
      {ranges.map(range => (
        <div key={range.id} className={styles['input-range']}>
          <span className={styles['input-range__title']}>{range.title}</span>
          <div className={styles['input-range__wrapper']}>
            <InputRange
              maxValue={range.range.max}
              minValue={range.range.min}
              formatLabel={value => `${value} ${range.sign}`}
              disabled={products.length === 0}
              value={range.curRange}
              onChange={handleChange(range.type)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default RangeList
