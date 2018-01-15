import React, { Component } from 'react';
import { Col , Card, Button, CardTitle, CardText } from 'reactstrap';
import './index.css';	
export default class User extends Component {
     render(){
        const { user, handleDelete } = this.props;
        return (
        <div className= 'oneAdmin clearfix'>
          <Col sm="12">
            <Card body inverse color="warning">
              <CardTitle>{user.first_name} {user.last_name}</CardTitle>
              <CardText>{user.email}</CardText>
              <Button color="secondary" onClick={() => handleDelete(user.id)}>Delete</Button>
            </Card> 
          </Col>        
        </div>
    )}
}
