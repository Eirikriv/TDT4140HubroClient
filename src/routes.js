import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/homeComponent'


//must check with server




export default(
  <Route path="/" component={App}>
<IndexRoute component={App}/>
    <Route path="home" component={Home}/>
    </Route>
)
