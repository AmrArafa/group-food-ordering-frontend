import React, { Component } from 'react';
import AdminItems from '../../../containers/AdminItemsContainer';
import { Route, Link } from 'react-router-dom';

export default class AdminPage extends Component {
    render (){
        return (
            <div>
              <h2>Admin menu Page</h2>
              <Route path="/admin/menu" exact component={AdminItems} />
            </div>
        )
    	if (localStorage.Admin) {
	        return (
	            <div>
	                <h2>Admin menu Page</h2>
	                <Route path="/admin/menu" exact component={AdminItems} />
	            </div>
	        )
    		
    	}
    	else {
    		return(
    			<div>
    				<h1> you can't be here </h1>
    			</div>
    			)
    	}
    }
}
