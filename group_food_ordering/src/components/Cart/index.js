import React, { Component } from 'react';
import './index.css';
import CartItem from '../../containers/CartItemContainer';
import { Link, Route } from 'react-router-dom';
import {Button } from 'reactstrap';

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
    this.getItemId = this.getItemId.bind(this);
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
    this.updateItemsAndQuantities = this.updateItemsAndQuantities.bind(this);
    this.updateCartArray = this.updateCartArray.bind(this);
  }

  getItemId(id){
    this.setState({
      ids: [...this.state.ids , id]
    });
  }

  calculateCartTotal(newPrice){
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

  // componentWillMount(){
  //   let a = [];
  //   localStorage.setItem('cartItems', JSON.stringify(a));
  // }

  componentWillUnmount(){
    localStorage.setItem('cartArray', JSON.stringify(this.state.cartArray));
  }

  render(){
      const { items, copyItems} = this.props;
      // console.log(this.state.itemsAndQuantities);
      console.log(this.state.cartArray);
    return (
      <div className='cart'>
        <p>Your Cart</p>
        {items.map((item) => {

      return  (
                <CartItem item={item} calculateCart={this.calculateCartTotal} calculateQuantity={this.claculateQuantities} updateItemsAndQuantities={this.updateItemsAndQuantities} updateCartArray={this.updateCartArray} getItemId={this.getItemId}/>
                            )
                    }
                    )}
      <p>Cart Total: {this.state.cartTotal} EGP</p>
        
      <Link className={items.length === 0? 'invisible' : 'visible'} onClick={() => copyItems(items, this.state.itemsAndQuantities)} to="/options">Confirm your Order</Link>
    
</div>
        )
  }

}
