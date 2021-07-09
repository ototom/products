import React from 'react';
import ReactDOM from 'react-dom';

import { AppProviders } from 'providers/AppProviders';

import { App } from './app/App';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
