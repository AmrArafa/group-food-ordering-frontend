import React, { Component } from 'react';
import './index.css';
import CartItem from '../../containers/CartItemContainer';
import { Link, Route } from 'react-router-dom';
import {Button } from 'reactstrap';
import OptionsPage from '../../pages/OptionsPage';

export default class Cart extends Component {

  constructor(){
    super();
    this.state = {
      cartTotal: 0,
      itemsAndQuantities: []
    }
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
    this.updateItemsAndQuantities = this.updateItemsAndQuantities.bind(this);
  }

  calculateCartTotal(newPrice){
    this.setState({
      cartTotal: this.state.cartTotal + newPrice
    });
  }


  updateItemsAndQuantities(itemID,quantity){
    var newArray = this.state.itemsAndQuantities.slice();
    if (newArray.length === 0){
      this.setState({
        itemsAndQuantities: [{itemID: itemID, quantity: quantity}]
      });
      return;
    }
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i].itemID === itemID){
        if (quantity === 0){
          newArray.splice(i, 1);
          break;
        }else if (quantity < 0){
          newArray[i].quantity -= 1;
          break;
        }else{
          newArray[i].quantity += 1;
          break;
        }
      }else if(i === newArray.length - 1){
        newArray.push({itemID: itemID, quantity: quantity});
        break;
      }
    }
    this.setState({
      itemsAndQuantities: newArray
    });
  }

    
  render(){
      const { items, copyItems} = this.props;
      console.log(this.state.itemsAndQuantities);
    return (
      <div className='cart'>
        <p>Your Cart</p>
        {items.map((item) => {
          return (
          <CartItem item={item} calculateCart={this.calculateCartTotal} updateItemsAndQuantities={this.updateItemsAndQuantities}/>
          )}
        )}
        <p>Cart Total: {this.state.cartTotal} EGP</p>
        <p>total quantity: {this.state.quantityForItem}</p>
        <Link onClick={() => copyItems(this.state.itemsAndQuantities)} to="/options">Confirm your Order</Link>
      </div>
  )}
}

 