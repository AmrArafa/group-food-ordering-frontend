import React, { Component } from 'react';
import './index.css';

export default class CartItem extends Component {
  constructor(props){
    super(props);
    const {item} = this.props;
    this.state = {
      quantity: 1,
      initial_price: item.price,
      price: item.price
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    const currentPrice = this.state.initial_price;
 
    this.setState({quantity: this.state.quantity + 1,
      price: this.state.price + currentPrice
    });
  }

  decrement(){
    const currentPrice = this.state.initial_price;
    if (this.state.quantity === 1){
      return;
    }
    this.setState({quantity: this.state.quantity - 1,
      price: this.state.price - currentPrice});
  }

  render(){
    const { item, deleteItem } = this.props;
    return (
      <div className="cartItem">
        <div className="clearfix">
          <p className="item-name">{item.name}</p> 
          <p className="item-price">{item.price} EGP</p>
        </div>
        <div className="clearfix">
          <button className="increment" onClick={() => this.increment()}>+</button>
          <p className="quantity">{this.state.quantity}</p>
          <button className="decrement" onClick={() => this.decrement()}>-</button>
          <button className="remove" onClick={() => deleteItem(item)}>X</button>
          <p>{this.state.price}</p>
        </div>
      </div>
    )}
}