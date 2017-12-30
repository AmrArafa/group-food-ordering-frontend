import React, { Component } from 'react';
import './index.css';	
import {Button } from 'reactstrap';
import { Table } from 'reactstrap';

export default class Group extends Component {
    constructor(){
        super();
        this.state = {
            time_frame: ''
        }
    }


    render(){
        const { group, items , createOrder} = this.props;
        return (
            <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Created by</th>
            <th>Members</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{group.creator_first_name}  {group.creator_last_name}</td>
            <td>{(group.member).map((member) => {
      return  (
        <div>
                {member.first_name} {member.last_name}
                </div>
               
                            )
                    }
                    )}</td>
            <td><Button onClick={() => createOrder(group.id)}> Join </Button></td>
          </tr>
        </tbody>
      </Table>




        	)}
    }