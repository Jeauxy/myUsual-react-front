import React, { Component } from 'react';
import axios from 'axios';

class Items extends Component{
  constructor(props){
    super(props);

    this.state = {
      foods: []
    }

    this._handleSubmit = this._handleSubmit.bind(this)
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


  _handleSubmit(e){
    e.preventDefault();
    let foodId = food._id
    axios.post('https://boiling-wildwood-13698.herokuapp.com/foods', {
      itemName: itemName,
      description: description,
      avgQuantityPurchased: avgQuantityPurchased,
    },{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id_token')}`
      }
    }).then(response => {
      let food = response.data;
      let food = this.state.foods;
      foods.push(food)
      this.setState({
        foods: foods
      })

    })
  }


  render(){
    return(
      <div>
        <input onClick={() => this._handleSubmit(food)} id="listsubmit" className="btn btn-primary btn-lg" type="submit" value="Add Usual" />
      </div>
    )
  }
}

export default Items;
