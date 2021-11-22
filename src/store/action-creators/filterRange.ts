import { Dispatch } from "react"
import { FilterRangeActionTypes, IRange, SetRangesAction } from "types/filterRange"

export const setRange = (ranges: IRange[], type: string, values: ({ min: number, max: number }), init: boolean = false) => {
    const newRanges = ranges.map((el) => {
        if (el.type === type) {
            if (init) {
                el.range.min = Math.floor(values.min);
                el.range.max = Math.ceil(values.max);
            }
            el.curRange.min = Math.floor(values.min);
            el.curRange.max = Math.ceil(values.max);
        }
        return el;
    })

    return (dispatch: Dispatch<SetRangesAction>) => {
        dispatch({ type: FilterRangeActionTypes.SET_RANGES, payload: newRanges })
    }
}