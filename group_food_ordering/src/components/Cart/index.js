import React, { Component } from 'react';
import './index.css';
import CartItem from '../../containers/CartItemContainer';

export default class Cart extends Component {
  render(){
    const {items} = this.props;
    return ( 
      <div className='cart'>
        <p>Your Cart</p>
        {items.map((item) => {
          return (
            <div>
              <CartItem item={item} />
            </div>
          )
        })}
      </div>
    )
  }
}
