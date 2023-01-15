import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Router from './routes';
import { store } from './hooks/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
