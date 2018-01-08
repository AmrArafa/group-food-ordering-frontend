import React, { Component, PropTypes } from 'react';
import { Card, CardText, CardBody, Button } from 'reactstrap';
import './index.css';	
import { Link } from 'react-router-dom';
export default class Admin extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        const { admin, handleDelete } = this.props;
        console.log('ADMIN', admin)
        return (
        <div className= 'oneItem'>
          
          <Card>
           <CardBody>
              <CardText>{admin.first_name} {admin.last_name} </CardText>
              <CardText>{admin.email} </CardText>
              <Button onClick={() => handleDelete(admin.id)} > Delete </Button>
            </CardBody>
          </Card>
        </div>
    )}
}
