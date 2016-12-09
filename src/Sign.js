import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';
import AuthService from './utils/AuthService';

const auth = new AuthService("GoBNjyrd7W9Jg1HECE7nH82QUhjTsM2B", "jeauxy.auth0.com");


class Sign extends Component {

  _signUp() {
    // calls auth0 signup api, sending new account data
    this.props.auth.signup({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: (this.refs.email).value,
      password: (this.refs.password).value
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  }


  render() {
  let sessionLink;
   if (auth.signUp()){
     sessionLink = this._logoutLink();
   } else {
     sessionLink = this._signUp();
   }

    return (
      <div className="Sign">
        <div id="home">
          <button className="btn btn-primary btn-lg" type="button" id="btn-login"><Link to="/home" />{sessionLink}<Link/></button>
          <button className="btn btn-primary btn-lg" type="button" id="btn-logout">Sign Up!</button>
        </div>
      </div>
    )
  }
}

export default Sign;
