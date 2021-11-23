import { IRange } from 'types/filterRange'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRangeArrayNumber = (arr: any[], field: string) => {
  const min = arr.reduce((acc, curr) => {
    if (findValFromObject !== undefined) {
      return findValFromObject(acc, field) < findValFromObject(curr, field)
        ? acc
        : curr
    }
  })
  const max = arr.reduce((acc, curr) => {
    if (findValFromObject !== undefined) {
      return findValFromObject(acc, field) > findValFromObject(curr, field)
        ? acc
        : curr
    }
  })

  return {
    min: findValFromObject(min, field),
    max: findValFromObject(max, field),
  }
}

export const getRangeByType = (ranges: IRange[], type: string) => {
  return ranges.find(el => el.type === type)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const findValFromObject = (object: any, key: string): number => {
  let value = 0
  Object.keys(object).some(function (k) {
    if (k === key) {
      value = object[k]

      return true
    }

    if (object[k] && typeof object[k] === 'object') {
      value = findValFromObject(object[k], key)

      return value !== undefined
    }

    return false
  })

  return value
}
export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const filterElementByRange = (
  ranges: IRange[],
  value: number,
  type: string,
) => {
  return (
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    value >= getRangeByType(ranges, type)!.curRange.min &&
    value <= getRangeByType(ranges, type)!.curRange.max
  )
}
