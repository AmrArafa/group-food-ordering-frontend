import React, { Component } from 'react';
import './index.css';
import CartItem from '../CartItem';
import { Link, Route } from 'react-router-dom';
import {Button } from 'reactstrap';
import OptionsPage from '../../pages/OptionsPage';

export default class Cart extends Component {
    
    render(){
        const { items, copyItems} = this.props;
      return  ( <div className='cart'>
        
         <p>Your Cart</p>
        {items.map((item) => {
      return  (
                <CartItem item={item} />
                            )
                    }
                    )}
      <Link onClick={() => copyItems(items)} to="/options">Confirm your Order</Link>




</div>


        )
  }
               
    
    }

