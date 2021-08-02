import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import '@babel/polyfill';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);