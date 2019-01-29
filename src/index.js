import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './App';

// React-redux
import { Provider } from 'react-redux';

import store from './store';

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>, 
  document.getElementById('root')
);
store.subscribe(render);
render();
