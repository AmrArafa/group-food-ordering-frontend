import React, { Component } from 'react';
import Users from '../../../containers/UsersContainer';

import { Route } from 'react-router-dom';

export default class UserPage extends Component {
    render (){
        return (
            <div>
                <h2> Users list </h2>
                <Route path="/admin/users" exact component={Users} />
            </div>
        )
    }
}
