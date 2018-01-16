import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import './index.css';	

export default class Item extends Component {
  
    render(){
        const { item, addItemToCart } = this.props;
        return (
        <div className= 'oneItem'>

        <Card>
        <CardImg className= 'cardImage' top width="50px" src={item.image_url=== null? `../../../images/makmak.png`: item.image_url} alt={`img for ${item.name}`} />
       <CardBody>
          <CardText>{item.name}</CardText>
          <CardText>EGP {parseFloat(item.price)}</CardText>
          <button className= "card-button" onClick={() => addItemToCart(item)}>Add to Cart </button>
        </CardBody>
        </Card>

        </div>
        )}
    }