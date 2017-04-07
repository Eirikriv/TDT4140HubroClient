import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import {Router, browserHistory} from 'react-router';
import rootReducer from './reducers/index';

let store = createStore(rootReducer)
ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
</Provider>
  ,document.querySelector('.container'));
