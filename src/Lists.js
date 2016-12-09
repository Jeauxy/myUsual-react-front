import React, { Component } from 'react';
import axios from 'axios';


class Lists extends Component{
  constructor(props){
    super(props);

    this.state = {
      foods: []
    }

    this._handleClick = this._handleClick.bind(this)
  }


  componentDidMount(){
    axios.get('https://boiling-wildwood-13698.herokuapp.com/foods', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id_token')}`
      }
    }).then(response => {
      this.setState({
        listId: response.data
      })
    })
  }


  _handleClick(list){
    document.getElementById('list-content-items').innerHTML = '';
    let listId = list._id
    document.getElementById('list-title').innerText = list.listName;
    axios.get('https://boiling-wildwood-13698.herokuapp.com/foods/' + listId, {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('id_token')}`
      }
    }).then(response => {
      console.log('response', response);
      let items = response.data;
      let ul = document.getElementById('list-content-items');
      for (var i = 0; i < items.length; i++) {
        ul.innerHTML += `<h3>${items[i].itemName}</h3>
        <h4>Description: ${items[i].description}</h4><h4>Quantity: ${items[i].avgQuantityPurchased}</h4>`
      }

    })
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bordernone">
            <div id="food-lists">
              <h2 id="header-color">My Usuals</h2>
              <br/>
              <div id="lists" className="list-group-item">
                <ul className="list-group-item">
                  {this.props.lists.map(list =>
                    <button onClick={() => this._handleClick(list)} id="buttons">
                     <li id="images">
                      <img className="list-group-item" src={list.img} id="img"></img>
                    </li>
                  </button>)}
                </ul>
              </div>
              <form id="new-list-form">
                <input id="list-name" type="text" name="list" placeholder="New Usual" maxLength="141" />
                <br/>
                <br/>
                <input id="listsubmit" className="btn btn-primary btn-lg" type="submit" value="Add Usual" />
              </form>
            </div>
          </div>
          <div id="fast-food" className="col-md-6 bordernone">
            <div id="list-placeholder">
            <div id="list-content">
              <h2 id="list-title"></h2>
                <div id="list-content-items">
                  {/* this is where all the details of the items will go */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 bordernone">
            <div id="form-placeholder">
              {/* <h3>Select a list on the left to add new items.</h3> */}
            </div>
            <div id="new-food">
              <h2 id="header-color">New Item</h2>
              <h4 id="required">*All Fields Required*</h4>
              <form id="foodItemForm">
                <p>
                  <input type="text" id="itemname" name="itemname" placeholder="Item Name" />
                </p>
                <p>
                  <input type="text" id="itemdescription" name="itemdescription" placeholder="Item Description" />
                </p>
                <p>
                  <input type="number" id="quantitypurchased" name="quantitypurchased" placeholder="Quantity Needed" />
                </p>
                <div id="foodstoresubmit">

                </div>
                <p>
                  <input className="btn btn-primary btn-lg" type="submit" id="fooditemsubmit" name="fooditemsubmit" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lists;
