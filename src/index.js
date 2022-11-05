import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './data/store';
import App from './аpp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
