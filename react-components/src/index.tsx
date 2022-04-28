import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Global } from './styles/global';
import App from './App';
import { store } from 'app/store';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
