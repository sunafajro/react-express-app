import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App';
import store, { history } from './store';

injectTapEventPlugin();

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<MuiThemeProvider> 
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>    
  </Provider>
</MuiThemeProvider>
  , document.getElementById('root'));
//registerServiceWorker();
