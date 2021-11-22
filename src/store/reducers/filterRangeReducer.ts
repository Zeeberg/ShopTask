import { FilterRangeAction, FilterRangeActionTypes, FilterRangeState } from "types/filterRange"

const initialState: FilterRangeState = {
    ranges: [
        {
            id: 1,
            type: "price",
            title: "Price range",
            sign: "$",
            range: {
                min: 0,
                max: 999
            },
            curRange: {
                min: 0,
                max: 999
            }
        },
        {
            id: 2,
            type: "rate",
            title: "Rate range",
            sign: "☆",
            range: {
                min: 1,
                max: 5
            },
            curRange: {
                min: 1,
                max: 5
            }
        }
    ]
}

export const filterRangeReducer = (state = initialState, action: FilterRangeAction): FilterRangeState => {
    switch (action.type) {
        case FilterRangeActionTypes.SET_RANGES:
            return { ranges: action.payload }
        default:
            return state
    }
}