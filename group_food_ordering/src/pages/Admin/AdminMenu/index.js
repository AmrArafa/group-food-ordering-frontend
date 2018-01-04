import React, { Component } from 'react';
import AdminItems from '../../../containers/AdminItemsContainer';
import logout from '../../../utils/logout';
import { Route, Link } from 'react-router-dom';

export default class AdminPage extends Component {
    render (){
        return (
            <div>
              <Link to="/" onClick={() => logout()}>Log out</Link>
              <h2>Admin menu Page</h2>
              <Route path="/admin/menu" exact component={AdminItems} />
            </div>
        )
    }
}
