import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
const APP_WITH_STORE = (
  <Provider store={store}>
    <App />
  </Provider>
);

document.title = 'React Simon Says';
ReactDOM.render(APP_WITH_STORE, document.getElementById('root'));
