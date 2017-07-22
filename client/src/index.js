import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore';

injectTapEventPlugin();

const store = configureStore();
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App store={store} />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
//registerServiceWorker();
