import React, { Component } from 'react';
import './index.css';	
import { Card, Button, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import moment from 'moment';

export default class Group extends Component {
    constructor(){
        super();
    }


    render(){
        const { group, items , createOrder, itemsIdsAndQuantity} = this.props;
        var now = moment();
        var a = moment(now,'YYYY-MM-DD HH:mm:ss');
        var b = moment(group.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = b.diff(a, 'minutes');

        return (

             <Card className='groupCard' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Created by: {group.creator_first_name}  {group.creator_last_name}</CardTitle>
        <CardSubtitle>Group order will be fired within: {diffMinutes} minutes</CardSubtitle>
        <CardText>Members <br/> {(group.member).map((member) => {
      return  (
        <div>
                {member.first_name} {member.last_name}
        </div>        
                )
                }
                )}

        </CardText>
        <Button onClick={() => createOrder(group.id, itemsIdsAndQuantity)}> Join</Button>
      </Card>
        	)}
    }