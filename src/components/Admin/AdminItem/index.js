import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, 
	  Button } from 'reactstrap';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './index.css';	
import { Link } from 'react-router-dom';


export default class Item extends Component {
    render(){
        const { item, handleDelete } = this.props;
        
        return (
        <div className= 'oneItem clearfix'>
        <Card>
        <CardImg className= 'cardImage' top width="50px" src={item.image_url === null? "../../../../images/makmak.png": item.image_url} alt={`img for ${item.name}`} />
       <CardBody>
          <CardText>{item.name}</CardText>
          <CardText>EGP {item.price}</CardText>
          <Link className="EditItem" to={`/admin/menu/edit/${item.id}`}>Edit</Link>
          <Button id="itemButton" onClick={() => handleDelete(item.id)} > Delete </Button>
        </CardBody>
        </Card>
        </div>
    )}
}
