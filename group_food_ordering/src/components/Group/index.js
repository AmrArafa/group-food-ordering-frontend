import React, { Component } from 'react';
import './index.css';	
import {Button } from 'reactstrap';

export default class Group extends Component {
    render(){
        const { group, items } = this.props;
        return (
        <div className= 'oneGroup'>
        {group.created_at}
<Button >Join </Button>
        </div>
        	)}
    }