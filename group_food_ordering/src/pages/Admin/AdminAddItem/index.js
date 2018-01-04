import React, { Component } from 'react';
import AdminAddItem from '../../../containers/AdminAdditemContainer';
import logout from '../../../utils/logout';
import { Route, Link } from 'react-router-dom';

export default class AdminAddItemPage extends Component {
    render (){
    	if (localStorage.Admin) {
        return (
            <div>
                <Link to="/" onClick={() => logout()}>Log out</Link>
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
