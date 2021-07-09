import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

import { AppRoute } from 'routing/AppRoute.enum';

export const Login = () => {
  return (
    <div className="login__wrapper">
      <div className="login__background-img" />
      <div className="login__content">
        <div className="login__header">
          <h2>join.tsh.io</h2>
        </div>
        <div className="login__form">
          <h2>Login</h2>
          <form>
            <div>
              <label htmlFor="username">
                Username:
              </label>
              <input id="username" name="username" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                Password:
              </label>
              <input id="password" name="password" type="password" />
            </div>
            <button className="btn" type="submit">Log in</button>
            <Link to={AppRoute.login}>Forgot password?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
