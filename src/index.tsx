import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './App';
import reducers from './redux';
import './index.scss';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const APP_WITH_STORE = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(APP_WITH_STORE, document.getElementById('root'));
