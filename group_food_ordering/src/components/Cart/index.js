import React, { Component } from 'react';
import './index.css';
import CartItem from '../../containers/CartItemContainer';
import { Link, Route } from 'react-router-dom';
import {Button } from 'reactstrap';
import OptionsPage from '../../pages/OptionsPage';

export default class Cart extends Component {

  constructor(){
    super();
    this.state = {
      cartTotal: 0,
      quantityForItem: 0,
      quantities: []
    }
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
    this.claculateQuantities = this.claculateQuantities.bind(this);
  }

  calculateCartTotal(newPrice){
    this.setState({
      cartTotal: this.state.cartTotal + newPrice
    });
  }


  claculateQuantities(quantity){
    this.setState({
      quantityForItem: this.state.quantityForItem + 1,
      quantities: [...this.state.quantities , this.state.quantityForItem]
    });
  }

    
    render(){
        const { items, copyItems} = this.props;
      return  ( <div className='cart'>
        
         <p>Your Cart</p>
        {items.map((item) => {
      return  (
                <CartItem item={item} calculateCart={this.calculateCartTotal} calculateQuantity={this.claculateQuantities}/>
                            )
                    }
                    )}
      <p>Cart Total: {this.state.cartTotal} EGP</p>
      <p>total quantity: {this.state.quantityForItem} 
     </p>
      <Link onClick={() => copyItems(items)} to="/options">Confirm your Order</Link>




</div>


        )


  }
}
