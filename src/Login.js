import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';
import AuthService from './utils/AuthService';

const auth = new AuthService("GoBNjyrd7W9Jg1HECE7nH82QUhjTsM2B", "jeauxy.auth0.com");


class Login extends Component {

  _loginLink(){

    return (
      <a href="#" onClick={(e)=>{
        e.preventDefault();
        auth.login();
      }}>Login</a>

    )
  }

  _logoutLink(){

    return (
      <a href="#" onClick={(e)=>{
        e.preventDefault();
        auth.login();
      }}>Logout</a>

    )
  }

  googleLogin() {

    return (
      <a href="#" onClick={(e)=>{
        e.preventDefault();
        auth.login();
      }}>Sign Up!</a>

    )
  }

  render() {
  let signUpLink;
    if (auth.loggedIn()){
      signUpLink = this.googleLogin();
    } else {
      signUpLink = this._logoutLink();
    }

  let sessionLink;
   if (auth.loggedIn()){
     sessionLink = this._loginLink();
   } else {
     sessionLink = this._logoutLink();
   }


    return (
      <div className="Login">
        <div id="home">
          <br/>
          <div id="home-banner">
            <div id="title">
              <h2 id="main">myUsual</h2>
            </div>
            <div id="button">
              <button className="btn btn-primary btn-lg" type="button" id="btn-login"><Link to="/home" />{sessionLink}<Link/></button>
            <br/>
            <br/>
              <button className="btn btn-primary btn-lg" type="button" id="btn-logout"><Link to="/home" />{signUpLink}<Link/></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
