import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import {Router, browserHistory} from 'react-router';
import rootReducer from './reducers/index';
import {ApolloProvider} from 'react-apollo';
import ApolloClient, {createNetworkInterface} from 'apollo-client';

const networkInterface= createNetworkInterface({ uri: 'http://api.v1.hubro.tech/graphql' });
const client= new ApolloClient({
  networkInterface,
});

let store = createStore(rootReducer)
ReactDOM.render(
<Provider store={store}>
  <ApolloProvider client={client}>
    <Router history={browserHistory} routes={routes}/>
</ApolloProvider>
</Provider>
  ,document.querySelector('.container'));
