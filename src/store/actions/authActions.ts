import { LOGIN, LOGOUT } from './actionTypes';

export function login() {
    // TODO: auth user logic

    return {type: LOGIN, payload: true}
}

export function logout() {
    // TODO: auth user logic

    return {type: LOGOUT, payload: false}    
}