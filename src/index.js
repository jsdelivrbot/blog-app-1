import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import route from './route'
import configStore from './store'

ReactDOM.render(
  <Provider store={configStore()}>
    <Router history={browserHistory} routes={route} />
  </Provider>
  , document.querySelector('.container'));
