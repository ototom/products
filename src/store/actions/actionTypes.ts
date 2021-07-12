import { IProduct } from 'app/products/product/Product';

// === PRODUCTS
export const GET_PRODUCTS = "GET_PRODUCTS";
export const LOADING_PRODUCTS = "LOADING_PRODUCTS";

// === AUTH
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// === DISPATCH TYPES
export interface IGetProducts {
    type: typeof GET_PRODUCTS,
    payload: {
        data: IProduct[],
        totalPages: string,
    }
}

export interface ILoadingProducts {
    type: typeof LOADING_PRODUCTS,
    payload: boolean
}

export interface ILogin {
    type: typeof LOGIN,
    payload: boolean
}

export interface ILogout {
    type: typeof LOGOUT,
    payload: boolean
}

export type ActionTypes = IGetProducts | ILoadingProducts | ILogin | ILogout;