import React, { Component } from 'react';
import Groups from '../../containers/GroupsContainer';
import './index.css';	
import { Link, Route } from 'react-router-dom';
import logout from '../../utils/logout';

export default class OptionsPage extends Component {
    render (){
        return (
            <div>
              <Link to="/" onClick={() => logout()}>Log out</Link>
              <Route path="/options" component={Groups} />
            </div>
        )
    }
}
