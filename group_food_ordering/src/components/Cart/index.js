import React, { Component } from 'react';
import './index.css';
import CartItem from '../CartItem';
import { Link, Route } from 'react-router-dom';
import {Button } from 'reactstrap';
import OptionsPage from '../../pages/OptionsPage';




export default class Cart extends Component {
    
    render(){
        const { items, copyItems} = this.props;
        console.log(items);
      return  ( <div className='cart'>
        
         <p>Your Cart</p>
        {items.map((item) => {
      return  (
                <CartItem item={item} />
                            )
                    }
                    )}
<Button onClick={() => copyItems(items)}>Order</Button>
<OptionsPage/>


</div>


        )
  }
               
    
    }

