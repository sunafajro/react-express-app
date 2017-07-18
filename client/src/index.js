import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>
  , document.getElementById('root'));
//registerServiceWorker();
