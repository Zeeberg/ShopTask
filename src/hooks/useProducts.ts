import { useMemo } from 'react'
import { IRange } from 'types/filterRange'
import { IProduct } from 'types/product'
import { findValFromObject, getRangeByType } from 'utils/helpers'

import { useTypedSelector } from './useTypedSelector'

const filterProductsByRange = (
  ranges: IRange[],
  obj: IProduct,
  type: string,
) => {
  return (
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    findValFromObject(obj, type) >=
      getRangeByType(ranges, type)!.curRange.min &&
    findValFromObject(obj, type) <= getRangeByType(ranges, type)!.curRange.max
  )
}

export const useProducts = (products: IProduct[]) => {
  const { ranges } = useTypedSelector(state => state.filterRange)
  const filteredProducts = useMemo(() => {
    return products.filter(
      product =>
        filterProductsByRange(ranges, product, 'price') &&
        filterProductsByRange(ranges, product, 'rate'),
    )
  }, [products, ranges])

  return filteredProducts
}
