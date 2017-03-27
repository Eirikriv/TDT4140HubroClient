import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import {browserHistory} from "react-router";


//must check with server


export default(
  <Route path="/" component={App}>
<IndexRoute component={App}/>
    <Route path="profil" component={App}/>
    </Route>
)
