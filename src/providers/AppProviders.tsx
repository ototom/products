import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store/store';

import { Provider } from 'react-redux';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
    <Router>
        <Provider store={store}>{children}</Provider>
    </Router>
);
