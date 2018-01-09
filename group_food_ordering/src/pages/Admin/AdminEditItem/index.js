import React, { Component } from 'react';
import AdminEditItems from '../../../containers/AdminEditItemContainer';
import { Route, Link } from 'react-router-dom';

export default class AdminEditItemPage extends Component {
    render (){
    	if (localStorage.Admin) {
        return (
            <div>
              <h2>Admin Edit item Page</h2>
              <Route path="/admin/menu/edit/:id" component={AdminEditItems} />
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
