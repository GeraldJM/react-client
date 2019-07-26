import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import './styles/layout.css';
import './styles/theme.css';

import App from './App';

render(
  <App />, 
  document.getElementById('root')
)