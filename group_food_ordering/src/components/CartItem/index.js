import React, { Component } from 'react';
import './index.css';

export default class CartItem extends Component {

  constructor(props){
    super(props);
    const {item, calculateCart, claculateQuantity} = this.props;
    this.state = {
      quantity: 1,
      initial_price: parseFloat(item.price),
      price: parseFloat(item.price)
    
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateCartTotal = this.updateCartTotal.bind(this);
    this.deleteAndUpdateCart = this.deleteAndUpdateCart.bind(this);
    this.props.calculateCart(this.state.initial_price);
    this.props.updateItemsAndQuantities(item.id, this.state.quantity);
  }

  increment(item_id){
    const currentPrice = this.state.initial_price;
    
 
    this.setState({quantity: this.state.quantity + 1,
      price: this.state.price + currentPrice});
    this.props.calculateCart(currentPrice);
    this.props.updateItemsAndQuantities(item_id, 1);
  }

  decrement(item_id){
    const currentPrice = this.state.initial_price;
    if (this.state.quantity === 1){
      return;
    }
    this.setState({quantity: this.state.quantity - 1,
      price: this.state.price - currentPrice});
    this.props.calculateCart(-currentPrice);
    this.props.updateItemsAndQuantities(item_id, -1);
  }

  deleteAndUpdateCart(item){
    const {deleteItem} = this.props;
    deleteItem(item);
    this.updateCartTotal();
    this.props.updateItemsAndQuantities(item.id, 0);
  }

  updateCartTotal(){
    this.props.calculateCart(-this.state.price)
  }

  componentWillUnmount(){
    localStorage.statesArray.push(this.state);
  }

  render(){
    const { item, deleteItem } = this.props;
    return (
      <div className="cartItem">
        <div className="clearfix">
          <p className="item-name">{item.name}</p> 
          <p className="item-price">{parseFloat(item.price)} EGP</p>
        </div>
        <div className="clearfix">
          <button className="increment" onClick={() => this.increment(item.id)}>+</button>
          <p className="quantity">{this.state.quantity}</p>
          <button className="decrement" onClick={() => this.decrement(item.id)}>-</button>
          <button className="remove" onClick={() => this.deleteAndUpdateCart(item)}>X</button>
          <p>Item Total: {this.state.price} EGP</p>
        </div>
      </div>
    )}
}
