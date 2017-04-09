import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home/index'
import Settings from './components/Settings/index'


export default(
  <Route path="/" component={App}>
<IndexRoute component={Home}/>
<Route path="user/settings" component={Settings}>
</Route>
  </Route>
)
