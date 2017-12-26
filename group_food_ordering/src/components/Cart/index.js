import React, { Component } from 'react';
import './index.css';
import CartItem from '../CartItem';


export default class Cart extends Component {
    
    render(){
        const { items} = this.props;
        console.log(items);
      return ( 
        <div className='cart'>
        <p>Your Cart</p>
        {items.map((item) => {
          return  (
            <CartItem item={item} />
            )
          }
        )}
        </div>
        )
    }
               
    
}

