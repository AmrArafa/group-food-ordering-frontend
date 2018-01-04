import React, { Component } from 'react';
import AdminEditItems from '../../../containers/AdminEditItemContainer';
import logout from '../../../utils/logout';
import { Route, Link } from 'react-router-dom';

export default class AdminEditItemPage extends Component {
    render (){
        return (
            <div>
              <Link to="/" onClick={() => logout()}>Log out</Link>
              <h2>Admin Edit item Page</h2>
              <Route path="/admin/menu/edit/:id" component={AdminEditItems} />
            </div>
        )
    }
}
