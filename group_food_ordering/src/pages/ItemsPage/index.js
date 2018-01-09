import React, { Component } from 'react';
import Items from '../../containers/ItemsContainer';
import './index.css';	
import { Link, Route } from 'react-router-dom';

export default class ItemsPage extends Component {
    render (){
        return (
          <div>        
            <Link to="/orderhistory">Check your orders</Link>

            <Items className="items"/>
          </div>
        )
    }
}
