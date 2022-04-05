import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Global } from './styles/global';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
