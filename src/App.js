import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      lists: [],
      loaded: false
    }
    this._loadLists = this._loadLists.bind(this);
  }

  componentDidMount(){
    console.log(this.props.auth);
    var token = localStorage.getItem('id_token');
    console.log(token);
    axios.get('https://boiling-wildwood-13698.herokuapp.com/lists', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      var newList = response.data;
      console.log(response.data);

      this.setState({
        lists: newList,
        loaded: true
      })
    })
  }

  _loadLists(){
    console.log('loading lists')
    if(this.state.loaded){
      console.log("returning Home with loaded lists")
      return <Home lists={this.state.lists} />
      console.log(this.state.lists);
    } else {
      return <h3>Cows</h3>
    }
  }

  render() {
    var cows = this._loadLists();

    return (
      <div className="App">
        <div className="content">
          {console.log('about to render cows')}
          {cows}
        </div>
      </div>
      );
    }
}



export default App;
