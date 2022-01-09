import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import {GlobalStyle} from './ui/globalStyles'

import {App} from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
