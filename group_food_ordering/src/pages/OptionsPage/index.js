import React, { Component } from 'react';
import Groups from '../../containers/GroupsContainer';
import './index.css';	
import {  Route } from 'react-router-dom';

export default class OptionsPage extends Component {
    render (){
        return (
            <div>
              <Route path="/options" component={Groups} />
            </div>
        )
    }
}
