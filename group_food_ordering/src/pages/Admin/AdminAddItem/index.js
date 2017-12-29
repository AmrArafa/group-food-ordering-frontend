import React, { Component } from 'react';
import AdminAddItem from '../../../containers/AdminAdditemContainer';

import { Route } from 'react-router-dom';

export default class AdminAddItemPage extends Component {
    render (){
        return (
            <div>
                <h2>Admin add item Page</h2>
                <Route path="/admin/menu/add" component={AdminAddItem} />
            </div>
        )
    }
}
