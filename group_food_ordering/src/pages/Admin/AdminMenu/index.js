import React, { Component } from 'react';
import AdminItems from '../../../containers/AdminItemsContainer';

import { Route } from 'react-router-dom';

export default class AdminPage extends Component {
    render (){
        return (
            <div>
                <h2>Admin menu Page</h2>
                <Route path="/admin/menu" component={AdminItems} />
            </div>
        )
    }
}
