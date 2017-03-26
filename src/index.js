import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';

import rootReducer from './reducers';
import App from './components/App';
import Socket from './modules/Socket';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App socket={new Socket({
      store
    })}/>
  </Provider>
, document.getElementById('app'));
