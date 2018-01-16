import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import './index.css';	

export default class Item extends Component {
  
    render(){
        const { item, addItemToCart } = this.props;
        return (
        <div className= 'oneItem'>

        <Card>
        <CardImg className= 'cardImage' top width="50px" src={item.image_url=== null? "https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAf-AAAAJDAyZjY1Njc3LWQyMzItNDk3ZC1hOTk0LTJhNGY2MGUxMmQzZg.png": item.image_url} alt={`img for ${item.name}`} />
       <CardBody>
          <CardText>{item.name}</CardText>
          <CardText>EGP {parseFloat(item.price)}</CardText>
          <button className= "card-button" onClick={() => addItemToCart(item)}>Add to Cart </button>
        </CardBody>
        </Card>

        </div>
        )}
    }