import React, { Component } from 'react';
import AdminAddItem from '../../../containers/AdminAdditemContainer';

import { Route } from 'react-router-dom';

export default class AdminAddItemPage extends Component {
    render (){
    	if (localStorage.Admin) {
        return (
            <div>
                <h2>Admin add item Page</h2>
                <Route path="/admin/menu/add" component={AdminAddItem} />
            </div>
        )
    }else {
    	return(
    			<div>
    				<h1> you can't be here </h1>
    			</div>
    			)
    }
    }
}
