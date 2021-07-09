import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css'
import './index.scss';

import { AppProviders } from 'providers/AppProviders';

import { App } from './app/App';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
