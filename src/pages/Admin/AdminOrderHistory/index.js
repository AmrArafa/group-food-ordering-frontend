import React, { Component } from 'react';
import AdminOrderHistory from '../../../components/Admin/AdminOrderHistory';

import { Route } from 'react-router-dom';

export default class AdminOrder extends Component {
    render (){
        return (
            <div>
                <h2 className="admin-title"> All Orders </h2>
                <Route path="/admin/orders" component={AdminOrderHistory} />
            </div>
        )
    }
}

