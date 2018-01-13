import React, { Component } from 'react';
import './index.css';
import CartItem from '../../containers/CartItemContainer';
import { Link, Route } from 'react-router-dom';
import {Button } from 'reactstrap';
import jwt from 'jsonwebtoken';

export default class Cart extends Component {

  constructor(){
    super();
    this.state = {
      cartTotal: 0,
      quantityForItem: 0,
      itemsAndQuantities: [],
      cartArray: []
    }
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
    this.updateItemsAndQuantities = this.updateItemsAndQuantities.bind(this);
    this.updateCartArray = this.updateCartArray.bind(this);
  }

  calculateCartTotal(newPrice){
    const token = localStorage.getItem('jwtToken');
    const loggedInUserID = jwt.decode(token);
    this.setState({
      cartTotal: this.state.cartTotal + newPrice
    });
  }

  updateCartArray(itemName, itemPrice, quantity){
    var newArray = this.state.cartArray.slice();
    if (newArray.length === 0){
      this.setState({
        cartArray: [{name: itemName, price: itemPrice, quantity: quantity}]
      });
      return;
    }
    for (var i = 0; i < newArray.length; i++){
      if (newArray[i].name === itemName){
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
        newArray.push({name: itemName, price: itemPrice, quantity: quantity});
        break;
      }
    }
    this.setState({
      cartArray: newArray
    });
  }

  updateItemsAndQuantities(item_id,quantity){
    var newArray = this.state.itemsAndQuantities.slice();
    if (newArray.length === 0){
      this.setState({
        itemsAndQuantities: [{item_id: item_id, quantity: quantity}]
      });
      return;
    }
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i].item_id === item_id){
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
        newArray.push({item_id: item_id, quantity: quantity});
        break;
      }
    }
    this.setState({
      itemsAndQuantities: newArray
    });
  }

  componentWillUnmount(){
    localStorage.setItem('cartArray', JSON.stringify(this.state.cartArray));
    localStorage.setItem('cartTotal', this.state.cartTotal);
  }

  render(){
      const { items, copyItems} = this.props;
    return (
      <div className='cart'>
        <p id="cart-title">Your Cart</p>
        <div className="cart-items">
        {items.map((item) => {
      return  (
                <CartItem item={item} calculateCart={this.calculateCartTotal} calculateQuantity={this.claculateQuantities} updateItemsAndQuantities={this.updateItemsAndQuantities} updateCartArray={this.updateCartArray} getItemId={this.getItemId}/>
                            )
                    }
                    )}
        </div>
      <p>Cart Total: {this.state.cartTotal} EGP</p>
        
      <Link className={items.length === 0? 'invisible' : 'confirm-order'} onClick={() => copyItems(items, this.state.itemsAndQuantities)} to="/options">Confirm your Order</Link>
    
</div>
        )
  }

}
