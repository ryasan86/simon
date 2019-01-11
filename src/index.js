import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const APP_WITH_STORE = (
  <Provider store={store}>
    <App />
  </Provider>
);

document.title = 'React Simon Says';
ReactDOM.render(APP_WITH_STORE, document.getElementById('root'));
