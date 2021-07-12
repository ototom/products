import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'app/login/Login';
import { Products } from 'app/products/Products';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
    return (
        <Switch>
            <Route path={AppRoute.login} component={Login} />
            <Route path={AppRoute.products} component={Products} />
            <Redirect from={AppRoute.home} to='/page/1' exact />
            <Redirect to={AppRoute.home} />
        </Switch>
    );
};
