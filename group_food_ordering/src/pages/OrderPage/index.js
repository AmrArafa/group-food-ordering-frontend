import React, { Component } from 'react';
import Order from '../../components/Order';
import './index.css';	
import { Link, Route } from 'react-router-dom';

export default class OrderPage extends Component {
    render (){
        return (
            <div>
           
               
                <Order />
            </div>
        )
    }
}
