import { Dispatch } from 'redux';
import { ActionTypes, GET_PRODUCTS, LOADING_PRODUCTS } from './actionTypes';

export const getProducts = (pageNumber: string, searchValue: string, isActive: boolean, isPromo: boolean) => async(dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: LOADING_PRODUCTS, payload: true })
        
        // construct URL params
        const params = new URLSearchParams([
            ['limit', '8'],
            ['page', pageNumber],
        ]);
        if (searchValue) params.append('search', searchValue);
        if (isActive) params.append('active', isActive.toString());
        if (isPromo) params.append('promo', isPromo.toString());

        // make API request
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}products?${params.toString()}`
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error('Unexpected error occured');
            }

            dispatch({ type: GET_PRODUCTS, payload: {data: data.items, totalPages: data.meta.totalPages} });
        } catch (error) {
            // TODO: push notification with error message
            console.log(error);
            dispatch({type: LOADING_PRODUCTS, payload: false})
        }
    }