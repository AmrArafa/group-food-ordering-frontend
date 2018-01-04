import React, { Component } from 'react';
import Users from '../../../containers/UsersContainer';

import { Route } from 'react-router-dom';

export default class UserPage extends Component {
    render (){
    	if (localStorage.Admin) {
        return (
            <div>
                <h2> Users list </h2>
                <Route path="/admin/users" exact component={Users} />
            </div>
        )
    }else{	
    	return(
    			<div>
    				<h1> you can't be here </h1>
    			</div>
    			)

    }
    }
}

