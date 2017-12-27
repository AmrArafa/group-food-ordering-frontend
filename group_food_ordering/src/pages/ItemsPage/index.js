import React, { Component } from 'react';
import Items from '../../containers/ItemsContainer';
import './index.css';	

export default class ItemsPage extends Component {
    render (){
        return (
            <div>
           
                <Items className="items"/>
            </div>
        )
    }
}
