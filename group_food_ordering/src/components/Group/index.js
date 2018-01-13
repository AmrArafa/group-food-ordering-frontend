import React, { Component } from 'react';
import './index.css';	
import { Card,  CardTitle, CardSubtitle, CardText } from 'reactstrap';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';

export default class Group extends Component {
    render(){
        const { group , createOrder, itemsIdsAndQuantity} = this.props;
        var now = moment();
        var a = moment(now,'YYYY-MM-DD HH:mm:ss');
        var b = moment(group.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = b.diff(a, 'minutes');

        const token = localStorage.getItem('jwtToken');
        const loggedInUserIdObject = jwt.decode(token);
        const loggedInUserId = loggedInUserIdObject.user_id;

        var ids = [];
        for (var i=0; i< group.members.length; i++){
            ids.push(group.members[i].id);
        };


        return (

             <Card className='groupCard' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Created by: {group.creator_first_name}  {group.creator_last_name}</CardTitle>
        <CardSubtitle>Group order will be fired within: {diffMinutes} minutes.</CardSubtitle>
        <CardText>Members <br/> {(group.members).map((member) => {
      return  (
        <div>
                {member.first_name} {member.last_name}
        </div>        
                )
                }
                )}

        </CardText>
    {
            ids.includes(loggedInUserId)
        ? <p className='alert'> You are already a member</p>
        : <Link onClick={() => createOrder(group.id, itemsIdsAndQuantity)} to={`/options/joingroup/${group.id}`}> Join</Link>
    }
      </Card>
        	)}
    }
