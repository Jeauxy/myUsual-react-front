import React, { Component } from 'react';
import Lists from './Lists';
import Logout from './Logout';

class Home extends Component{

  render() {
    console.log('home lists', this.props.lists);
    return(
      <div>
        <div id="header">
          <div id="container">
            <Logout className="logout" />
          </div>
          <img id="logos" src="./myUsual-logo.jpeg" />
        </div>
        <Lists lists={this.props.lists} />
      </div>
    )
  }
}

export default Home;
