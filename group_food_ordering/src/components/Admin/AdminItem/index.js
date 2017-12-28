import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, 
	CardTitle, CardSubtitle, Button } from 'reactstrap';
import './index.css';	
import { Link } from 'react-router-dom';
export default class Item extends Component {
    render(){
        const { item, handleDelete, sendItem } = this.props;
        
        return (
        <div className= 'oneItem'>
        <Card>
        <CardImg className= 'cardImage' top width="50px" src={item.image} alt="Card image cap" />
       <CardBody>
          <CardText>{item.name}</CardText>
          <CardText>{item.price} EGP</CardText>
          <Button ><Link to={`/admin/menu/edit/${item.id}`}>Edit</Link></Button>
          <Button onClick={() => handleDelete(item.id)} > Delete </Button>
        </CardBody>
        </Card>
        </div>
        	)}
    }

    // onClick={() => sendItem(item)}