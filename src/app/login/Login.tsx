import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Logo from '../logo/Logo';
import { AppRoute } from 'routing/AppRoute.enum';
import { login } from 'store/actions/authActions';
import './Login.scss';

export const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = () => {
        history.push('/');
        dispatch(login());
    };

    return (
        <div className='login__wrapper'>
            <div className='login__background-img' />
            <div className='login__content'>
                <div className='login__header'>
                    <Logo />
                </div>
                <div className='login__form'>
                    <h2>Login</h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label htmlFor='username'>Username:</label>
                            <input
                                id='username'
                                name='username'
                                type='text'
                                placeholder='Enter username'
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>Password:</label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Enter password'
                            />
                        </div>
                        <button className='btn' type='submit'>
                            Log in
                        </button>
                        <Link to={AppRoute.login}>Forgot password?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
