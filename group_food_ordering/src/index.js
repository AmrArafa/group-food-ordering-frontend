import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from './configureStore';
import setAuthorizationToken from './utils/setAuthorizationToken';

const store = createStore();
window.store = store;

setAuthorizationToken(localStorage.getItem('jwtToken'));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
