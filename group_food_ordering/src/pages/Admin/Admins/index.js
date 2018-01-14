import React, { Component } from 'react';
import Admins from '../../../containers/AdminsContainer';

import { Route } from 'react-router-dom';

export default class AdminPage extends Component {
    render (){
    	if (localStorage.Admin) {
        return (
            <div>
                <Route path="/admin/admins" exact component={Admins} />
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

