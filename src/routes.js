import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home/index'
import Dashboard from './components/Dashboard/index'


export default(
  <Route path="/" component={App}>
<IndexRoute component={Home}/>
<Route path="dashboard" component={Dashboard}>
</Route>
  </Route>
)
