import React, { Component, PropTypes } from 'react';
import { Col , Card, Button, CardTitle, CardText } from 'reactstrap';
import './index.css';	
import { Link } from 'react-router-dom';
export default class Admin extends Component {
    constructor(props) {
      super(props);
    }

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
