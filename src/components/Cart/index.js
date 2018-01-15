import React, { Component } from 'react';
import './index.css';
import CartItem from '../../containers/CartItemContainer';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

export default class Cart extends Component {

  constructor(){
    super();
    this.state = {
      itemsAndQuantities: []
    }
    this.updateItemsAndQuantities = this.updateItemsAndQuantities.bind(this);
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

  render(){
     const { items, quantities, total, copyItems} = this.props;
    return (
      <div className='cart'>
        <p id="cart-title">Your Cart</p>
        <div className="cart-items">
        {items.map((item, index) => {
      return  (
                <CartItem item={item} calculateCart={this.calculateCart} updateItemsAndQuantities={this.updateItemsAndQuantities} quantity={quantities[index]}/>
              )
        }
        )}
        </div>
      <p>Cart Total: EGP {total}</p>
        
      <Link className={items.length === 0? 'invisible' : 'confirm-order'} onClick={() => {copyItems(items, this.state.itemsAndQuantities);}} to="/options">Confirm your Order</Link>
    
    </div>
    )
  }

}
