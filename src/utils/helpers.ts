import { IRange } from "types/filterRange";

export const getRangeArrayNumber = (arr: any[], field: string) => {
    const min = arr.reduce((acc, curr) =>
        findValFromObject(acc, field)! < findValFromObject(curr, field)! ? acc : curr
    )
    const max = arr.reduce((acc, curr) =>
        findValFromObject(acc, field)! > findValFromObject(curr, field)! ? acc : curr
    )
    return {
        min: findValFromObject(min, field),
        max: findValFromObject(max, field),
    };
}

export const getRangeByType = (ranges: IRange[], type: string) => {
    return ranges.find((el) => el.type === type);
}

const findValFromObject = (object: any, key: string): number => {
    let value = 0;
    Object.keys(object).some(function (k) {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === 'object') {
            value = findValFromObject(object[k], key);
            return value !== undefined;
        }
        return false
    });
    return value;
}
export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);