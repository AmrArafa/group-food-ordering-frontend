import React, { Component } from 'react';
import './index.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AdminEditItems extends Component {
  constructor(props){
        super(props);
        this.state = {
            name: '',
            image_url: '',
            price: ''          
        }
          this._handleChange = this._handleChange.bind(this),
          this._handleNewImage = this._handleNewImage.bind(this)

          
    }
    componentWillMount(){
       const { getItem, match: {params: {id}}} = this.props;
       getItem(id);

    }
     componentWillReceiveProps(nextProps) {
      if (this.props.item.id != nextProps.item.id) {
        this.setState({...this.state, name: nextProps.item.name,
         price: nextProps.item.price,
          image_url: nextProps.item.image.url });
      }
    
    }




    _handleChange(e){
       this.setState({...this.state, [e.target.name] :e.target.value})
    }
     _handleNewImage(e){
      this.setState({...this.state, [e.target.name] :e.target.files[0]})
   }

    
    render(){
          const { editItem, item } = this.props;
          var itemName = this.state.name
          var itemImage = "http://localhost:3000"+this.state.image_url
          var itemPrice = this.state.price
          // var itemEdit = {
          //   name: this.state.name,
          //   image: this.state.image,
          //   price: this.state.price
          // }
            let itemEdit = new FormData();
          itemEdit.append('name', this.state.name);
          itemEdit.append('image', this.state.image);
          itemEdit.append('price', this.state.price);

     return (

      <div>
        <p>Edit your item </p>
        <form>
          <div className="itemName">
            <label>Item Name </label>
            <input type="text" name="name" value={itemName} onChange={this._handleChange} />
          </div>
          <div className="itemName">
              <img src={itemImage} alt="Card image cap" />
            <label htmlFor="image" id="image-label-to-click">Edit image</label>
            <input type="file" id="image" name="image" accept="image/*" className="image-file-input" onChange={this._handleNewImage} />
          </div>
          <div className="itemName">
            <label>Price</label>
            <input type="text" name="price" value={itemPrice} onChange={this._handleChange} />
          </div>
        </form>

<Link onClick={() => editItem(item.id, itemEdit)} to="/admin/menu">Submit</Link>

       </div>
       
)
}
}

