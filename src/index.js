import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import {Router, browserHistory} from 'react-router';
import rootReducer from './reducers/index';
import {ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://api.v1.hubro.tech/graphql'
})

const client  = new ApolloClient({
  networkInterface:networkInterface
})
let store = createStore(rootReducer)
ReactDOM.render(
  <ApolloProvider client={client}>
<Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
</Provider>
</ApolloProvider>
  ,document.querySelector('.container'));
