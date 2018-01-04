import React, { Component } from 'react';
import AdminAddItem from '../../../containers/AdminAdditemContainer';
import logout from '../../../utils/logout';
import { Route, Link } from 'react-router-dom';

export default class AdminAddItemPage extends Component {
    render (){
        return (
            <div>
                <Link to="/" onClick={() => logout()}>Log out</Link>
                <h2>Admin add item Page</h2>
                <Route path="/admin/menu/add" component={AdminAddItem} />
            </div>
        )
    }
}
