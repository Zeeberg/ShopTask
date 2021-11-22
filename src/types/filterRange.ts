export enum FilterRangeActionTypes {
    SET_RANGES = "SET_RANGES",
}

export interface FilterRangeState {
    ranges: IRange[];
}

export interface IRange {
    id: number,
    type: string;
    title: string;
    sign: string;
    range: {
        min: number
        max: number
    }
    curRange: {
        min: number
        max: number
    }
}

export interface SetRangesAction {
    type: FilterRangeActionTypes.SET_RANGES;
    payload: IRange[]
}

export type FilterRangeAction = SetRangesAction