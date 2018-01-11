import React, { Component } from 'react';
import AdminInvitations from '../../../containers/AdminInvitationsContainer';
import { Route, Link } from 'react-router-dom';

export default class AdminRegistration extends Component {
    render (){
        return (
            <div className="clearfix">
              <h2>Please enter your info</h2>
              <Route path="/invitations/:token" component={AdminInvitations} />
            </div>
        )
    }
}
