import React, { Component } from 'react';
import './index.css';
import { Button, Form, Input, FormGroup, Col, FormText, Label } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AdminAddItems extends Component {
     constructor(){
        super();
        this.state = {
            name: '',
            image: '',
            price: 0 
          }
          this._handleChange = this._handleChange.bind(this),
          this._handleNewImage = this._handleNewImage.bind(this)
    }
     _handleChange(e){
      this.setState({...this.state, [e.target.name] :e.target.value})
    }
    _handleNewImage(e){
      this.setState({...this.state, [e.target.name] :e.target.files[0]})
   }

    render(){
    const { addItem } = this.props;

    let item = new FormData();
    item.append('name', this.state.name);
    item.append('image', this.state.image);
    item.append('price', this.state.price);
     return (
      <div className="clearfix ">
        <div className="admin-title">
          <p>add your new item </p>
        </div>
        <Form id="addItemForm">
        <FormGroup row>
          <Label for="itemName" sm={2} color="red">Item Name</Label>
          <Col sm={6}>
            <Input type="text" name="name" id="itemName" placeholder="Your Item Name" onChange={this._handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Image" sm={2}>Upload image</Label>
          <Col sm={6}>
            <Input type="file" name="image" accept="image/*" className="image-file-input" onChange={this._handleNewImage} id="Image" />
            <FormText color="muted">
              Put your image here
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Price" sm={2}>Price</Label>
          <Col sm={6}>
            <Input type="text" name="price" id="Price" placeholder="15.00" onChange={this._handleChange} />
          </Col>
        </FormGroup>
        </Form>
        <div className="addItemButton">
          <Link id="addItemButton" onClick={() => addItem(item)} to="/admin/menu">Submit</Link>
        </div>
       </div>
        )
      }
}




