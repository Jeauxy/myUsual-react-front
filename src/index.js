import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import './index.css';
import Login from './Login';
import AuthService from './utils/AuthService';

var options = {
  allowedConnections: ['google-oauth2', 'facebook',]
};

const auth = new AuthService("GoBNjyrd7W9Jg1HECE7nH82QUhjTsM2B", "jeauxy.auth0.com", options);

import './index.css';

const requireAuth = (nextState, replace) => {
  console.log(auth)
  if(!auth.loggedIn()){
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" auth={auth}>
      <IndexRoute component={Login}/>
      <Route path="/home" component={App} onEnter={requireAuth}/>
      <Route path="/access_token=:token" component={Login}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
