import React, { Component } from 'react';

export default class CartTotal extends Component {
  render(){
    return (
      <div>
        <p>Total Price: {totalPrice} EGP</p>
      </div>
    )
  }
}