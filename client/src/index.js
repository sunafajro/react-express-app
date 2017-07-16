import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';
import App from './containers/App';

let store = createStore(reducer);
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<App store={ store } />
, document.getElementById('root'));
//registerServiceWorker();
