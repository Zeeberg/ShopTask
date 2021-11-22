export enum CategoryActionTypes {
    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
}

interface FetchCategoriesAction {
    type: CategoryActionTypes.FETCH_CATEGORIES;
}
interface FetchCategoriesSuccessAction {
    type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS;
    payload: string[]
}
interface FetchCategoriesErrorAction {
    type: CategoryActionTypes.FETCH_CATEGORIES_ERROR;
    payload: string
}

export interface CategoryState {
    categories: string[];
    loading: boolean;
    error: null | string;
}

export type CategoryAction = FetchCategoriesAction | FetchCategoriesSuccessAction | FetchCategoriesErrorAction
