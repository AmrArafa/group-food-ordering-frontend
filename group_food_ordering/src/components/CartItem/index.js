import React, { Component } from 'react';
import './index.css';

export default class CartItem extends Component {

  constructor(props){
    super(props);
    const {item, quantity} = this.props;
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.deleteAndUpdateCart = this.deleteAndUpdateCart.bind(this);
    this.props.updateItemsAndQuantities(item.id, quantity);
  }


  increment(item){
    const {incrementQuantity} = this.props;
    incrementQuantity(item);
    this.props.updateItemsAndQuantities(item.id, 1);
  }

  decrement(item, quantity){
    const {decrementQuantity} = this.props;
    decrementQuantity(item);
    this.props.updateItemsAndQuantities(item.id, -1);
  }

  deleteAndUpdateCart(item, quantity){
    const {deleteItem} = this.props;
    this.props.updateItemsAndQuantities(item.id, 0);
    deleteItem(item);
  }

  render(){
    const { item, quantity, deleteItem, incrementQuantity, decrementQuantity } = this.props;
    return (
      <div className="cartItem">
        <div className="clearfix">
          <p className="item-name">{item.name}</p> 
          <p className="item-price">EGP {parseFloat(item.price)}</p>
        </div>
        <div className="clearfix">
          <button className="increment" onClick={() => this.increment(item)}>+</button>
          <p className="quantity1">{quantity}</p>
          <button className="decrement" onClick={() => this.decrement(item, quantity)}>-</button>
          <button className="remove" onClick={() => this.deleteAndUpdateCart(item, quantity)}>X</button>
          <p className="item-total">Item Total: EGP {parseFloat(item.price) * quantity}</p>
        </div>
      </div>
    )}
}
