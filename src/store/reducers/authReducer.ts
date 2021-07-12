import { ActionTypes, LOGIN, LOGOUT } from 'store/actions/actionTypes';

interface IDefaultState {
    isLoggedIn: boolean
}

const initialState:IDefaultState = {
    isLoggedIn: true
}

export const authReducer = (state:IDefaultState = initialState, action: ActionTypes):IDefaultState => {
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: action.payload
            };
        case LOGOUT:
            return {
                isLoggedIn: action.payload
            };
        default:
            return state
    }
}