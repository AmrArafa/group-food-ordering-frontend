import React, { Component } from 'react';
import './index.css';	
import {Button } from 'reactstrap';

export default class Group extends Component {
    constructor(){
        super();
        this.state = {
            visible: true
        }
    }


    render(){
        const { group, items , createOrder} = this.props;
        return (
        <div className= 'oneGroup'>
        <h4>Group: {group.id} </h4><br/>
        <h5>Created by: </h5> <br/> {group.creator_first_name}  {group.creator_last_name} <br/>
        <h5>Members: </h5>{(group.member).map((member) => {
      return  (
        <div>
                {member.first_name} {member.last_name}
                </div>
               
                            )
                    }
                    )} <br/>
<Button onClick={() => createOrder(group.id)}> Join </Button>


        </div>
        	)}
    }