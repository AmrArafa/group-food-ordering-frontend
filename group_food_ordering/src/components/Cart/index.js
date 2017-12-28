import React, { Component } from 'react';
import './index.css';
import CartItem from '../../containers/CartItemContainer';

export default class Cart extends Component {
  constructor(){
    super();
    this.state = {
      cartTotal: 0
    }
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
  }

  calculateCartTotal(newPrice){
    this.setState({
      cartTotal: this.state.cartTotal + newPrice
    });
  }

  render(){
    const {items} = this.props;
    console.log(CartItem);
    return ( 
      <div className='cart'>
        <p>Your Cart</p>
        {items.map((item) => {
          return (
            <div>
              <CartItem item={item} calculateCart={this.calculateCartTotal} />
            </div>
          )
        })}
        <p>Cart Total: {this.state.cartTotal} EGP</p>
      </div>
    )
  }
}
