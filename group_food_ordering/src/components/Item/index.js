import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, 
	CardTitle, CardSubtitle, Button } from 'reactstrap';
import './index.css';	

export default class Item extends Component {
    render(){
        const { item, addItem } = this.props;
        return (
        <div className= 'oneItem'>
        <Card>
        <CardImg className= 'cardImage' top width="50px" src={item.thumbnailUrl} alt="Card image cap" />
       <CardBody>
          <CardText>{item.title}</CardText>
          <Button onClick={() => addItem(item)}>Add to Cart </Button>
        </CardBody>
        </Card>
        </div>
        	)}
    }