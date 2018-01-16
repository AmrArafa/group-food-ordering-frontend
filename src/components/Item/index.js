import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import './index.css';	

export default class Item extends Component {
  
    render(){
        const { item, addItemToCart } = this.props;
        return (
        <div className= 'oneItem'>

        <Card>
        <CardImg className= 'cardImage' top width="50px" src={item.image_url=== null? `https://s3.eu-central-1.amazonaws.com/ordering-food/makmak.png`: item.image_url} alt="Card image cap" />
       <CardBody>
          <CardText>{item.name}</CardText>
          <CardText>EGP {parseFloat(item.price)}</CardText>
          <button className= "card-button" onClick={() => addItemToCart(item)}>Add to Cart </button>
        </CardBody>
        </Card>

        </div>
        )}
    }