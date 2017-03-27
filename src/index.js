import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';



import {ApolloProvider} from 'react-apollo';
import ApolloClient, {createNetworkInterface} from 'apollo-client';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:5000/graphql' });
const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
    <ApolloProvider client ={client}>
  <App/>
  </ApolloProvider>,document.getElementById('root'));
