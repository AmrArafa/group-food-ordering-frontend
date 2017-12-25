import React, { Component } from 'react';
import './index.css'; 

export default class CartItem extends Component {
    render(){
        const { item } = this.props;
        return (
        <div className= 'cartItem'>
        <p>Your Cart</p>
        {item.title} <br/>
        {item.url}
        </div>
          )}
    }