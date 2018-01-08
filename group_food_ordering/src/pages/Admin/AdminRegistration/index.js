import React, { Component } from 'react';
import AdminInvitations from '../../../containers/AdminInvitationsContainer';
import logout from '../../../utils/logout';
import { Route, Link } from 'react-router-dom';

export default class AdminRegistration extends Component {
    render (){
        return (
            <div>
              <Link to="/" onClick={() => logout()}>Log out</Link>
              <h2>Please enter your info</h2>
              <Route path="/invitations/:token" component={AdminInvitations} />
            </div>
        )
    }
}
