import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, 
	CardTitle, CardSubtitle, Button } from 'reactstrap';
import './index.css';	

export default class Item extends Component {
  
    render(){
        const { item, addItemToCart } = this.props;
        return (
        <div className= 'oneItem'>

        <Card>
        <CardImg className= 'cardImage' top width="50px" src={item.image} alt="Card image cap" />
       <CardBody>
          <CardText>{item.name}</CardText>
          <CardText>{parseFloat(item.price)} EGP</CardText>
          <Button onClick={() => addItemToCart(item)}>Add to Cart </Button>
        </CardBody>
        </Card>

        </div>
        )}
    }