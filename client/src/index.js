import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import ReduxPromise from "redux-promise";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './index.css';
import App from './components/App';
import reducer from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore(reducer,applyMiddleware(ReduxPromise))}>
        <Router>
        <App />
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
