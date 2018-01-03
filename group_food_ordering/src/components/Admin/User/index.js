import React, { Component, PropTypes } from 'react';
import { Card, CardText, CardBody, Button } from 'reactstrap';
import './index.css';	
import { Link } from 'react-router-dom';
export default class User extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        const { user, handleDelete } = this.props;
        console.log('USER', user)
        return (
        <div className= 'oneItem'>
          
          <Card>
           <CardBody>
              <CardText>{user.first_name} {user.last_name} </CardText>
              <CardText>{user.email} </CardText>
              <Button onClick={() => handleDelete(user.id)} > Delete </Button>
            </CardBody>
          </Card>
        </div>
    )}
}
