import React, { Component } from 'react';
import DashBoard from '../../../containers/AdminDashBoardContainer';

import { Route } from 'react-router-dom';

export default class AdminPage extends Component {
    render (){
        return (
            <div>
           	  <Route path="/admin/home" component={DashBoard} />
            </div>
        )
    }
}

