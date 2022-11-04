import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from 'react-redux';
import App from './App';
import store from './data/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
