import { IProduct } from 'app/products/product/Product';
import { ActionTypes, GET_PRODUCTS, LOADING_PRODUCTS } from 'store/actions/actionTypes';

interface IDefaultState {
    totalPages: number,
    isLoading: boolean,
    data: IProduct[]
}

const initialState:IDefaultState = {
    totalPages: 0,
    isLoading: false,
    data: []
}

export const productsReducer = (state:IDefaultState = initialState, action: ActionTypes):IDefaultState => {
        switch (action.type) {
            case GET_PRODUCTS:
                return {
                    totalPages: +action.payload.totalPages,
                    isLoading: false,
                    data: action.payload.data
                }
            case LOADING_PRODUCTS:
                return {
                    ...state,
                    isLoading: action.payload
                }
            default:
                return state;
        }
    }