import React, { Component } from 'react';
import './index.css'; 

export default class CartItem extends Component {
    render(){
        const { item } = this.props;
        return (
        <div className= 'cartItem'>
       
        {item.name} <br/>
        {item.price} EGP
        </div>
          )}
    }