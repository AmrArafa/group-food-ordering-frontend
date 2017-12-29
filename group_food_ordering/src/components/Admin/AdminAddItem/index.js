import React, { Component } from 'react';
import './index.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AdminAddItems extends Component {
     constructor(){
        super();
        this.state = {
            name: '',
            image: '',
            price: 0 ,
          }
          this._handleChange = this._handleChange.bind(this)
    }

    _handleChange(e){
      this.setState({...this.state, [e.target.name] :e.target.value})
    }

    render(){
    const { addItem } = this.props;
    var item = {
      name: this.state.name,
      image: this.state.image,
      price: this.state.price
    }
     return (
      <div>
        <p>add your new item </p>
        <form>
          <div className="itemName">
            <label>Item Name </label>
            <input type="text" name="name" onChange={this._handleChange} />
          </div>
          <div className="itemName">
            <label>Image </label>
            <input type="text" name="image" onChange={this._handleChange} />
          </div>
          <div className="itemName">
            <label>Price</label>
            <input type="text" name="price" onChange={this._handleChange} />
          </div>
        </form>


        <Button onClick={() => addItem(item)}> <Link to="/admin/menu">Submit</Link> </Button>

       </div>
        )
      }
}




