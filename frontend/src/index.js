import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { icons } from './assets/icons'
import { Provider } from 'react-redux'
import store from './store/store'

React.icons = icons
window.store= store;
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

