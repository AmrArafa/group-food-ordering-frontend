import React, { Component } from 'react';
import Groups from '../../containers/GroupsContainer';
import './index.css';	

export default class GroupsPage extends Component {
    render (){
        return (
            <div>
           
                <Groups className="groups"/>
            </div>
        )
    }
}
