import React, { Component } from 'react';
import DashBoard from '../../../containers/AdminDashBoardContainer';

import { Route } from 'react-router-dom';

export default class UserPage extends Component {
    render (){
        return (
            <div>
                <h2> Welcome </h2>
                <Route path="/admin/home" component={DashBoard} />
            </div>
        )
    }
}

