import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import {Router, browserHistory} from 'react-router';
import rootReducer from './reducers/index';
import {ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import colors from './assets/colorSchema'
const networkInterface = createNetworkInterface({
  uri: 'http://api.v1.hubro.tech/graphql'
})


const client  = new ApolloClient({
  networkInterface:networkInterface,
  dataIdFromObject: o => o.id
})

const muiTheme = getMuiTheme({
  palette: {
    textColor: colors.mainTextcolor,
    primary1Color: colors.blue,
    pickerHeaderColor: colors.blue
  },
  appBar: {
    height: 70,
  },
});

let store = createStore(rootReducer)
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>

  <ApolloProvider client={client}>
<Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
</Provider>
</ApolloProvider>
</MuiThemeProvider>
  ,document.querySelector('.container'));
