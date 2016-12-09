import React from 'react';
import './App.css';
import {Link, hashHistory} from 'react-router';
import AuthService from './utils/AuthService';

const auth = new AuthService("GoBNjyrd7W9Jg1HECE7nH82QUhjTsM2B", "jeauxy.auth0.com");


export class Logout extends React.Component {

  _logoutLink(){
    return (
      <a href="#" onClick={(e)=>{
        e.preventDefault();
        auth.logout();
        hashHistory.push('/');
      }}>Logout</a>
    )
  }


  render() {
    let sessionLink = this._logoutLink();

    return (
      <div className="Logout">
        <div id="logout-button">
          <a><Link to="/" />{sessionLink}<Link/></a>
        </div>
      </div>
    )
  }
}

export default Logout;
