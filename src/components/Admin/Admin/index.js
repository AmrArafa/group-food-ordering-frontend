import React, { Component } from 'react';
import { Col , Card, Button, CardTitle, CardText } from 'reactstrap';
import './index.css';	
export default class Admin extends Component {
    render(){
        const { admin, handleDelete } = this.props;
        return (
        <div className= 'oneAdmin clearfix'>
          <Col >
            <Card body inverse color="warning">
              <CardTitle>{admin.first_name} {admin.last_name} </CardTitle>
              <CardText>{admin.email}</CardText>
              <Button color="secondary" onClick={() => handleDelete(admin.id)}>Delete</Button>
            </Card> 
          </Col>           
        </div>
    )}
}
