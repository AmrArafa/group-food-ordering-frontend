import React, { Component } from 'react';
import AdminItems from '../../../containers/AdminItemsContainer';
import { Route } from 'react-router-dom';

export default class AdminPage extends Component {
    render (){
       if (localStorage.Admin) {
	        return (
	            <div>
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
