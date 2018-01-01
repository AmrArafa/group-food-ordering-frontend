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
            encodedString: '',
            fileName: ''
          }
          this._handleChange = this._handleChange.bind(this)
    }
    // _handleNewImage(encodedString, fileName) {
    //   this.setState({...this.state, encodedString :encodedString, fileName :fileName})
    //   console.log(this.state.fileName)
    //   // console.log(this.state.encodedString)

    //   }
  //    _getBase64(file) {
  //     console.log('Hendl', this )
  //   var reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this._handleNewImage(reader.result, file.name);
  //   };
  //   reader.onerror = function (error) {
  //     console.log('Error: ', error);
  //   };
  // }

    _handleChange(e){
      this.setState({...this.state, [e.target.name] :e.target.value})
    }
    _handleNewImage(e){
      console.log("file is ")
      console.log(e.target.files[0]);
      this.setState({...this.state, [e.target.name] :e.target.files[0]})
   }

    render(){
    const { addItem } = this.props;
    // var item = {
    //   name: this.state.name,
    //   image: this.state.image,
    //   price: this.state.price
    // }
    let item = new FormData();
    item.append('name', this.state.name);
    item.append('image', this.state.image);
    item.append('price', this.state.price);
    console.log('Forrrrrm', item)
     return (
      <div>
        <p>add your new item </p>
        <form>
          <div className="itemName">
            <label>Item Name </label>
            <input type="text" name="name" onChange={this._handleChange} />
          </div>
          <div className="itemName">
            <label htmlFor="image">Image</label>
            <label htmlFor="image" id="image-label-to-click">Upload image</label>
            <input type="file" id="image" name="image" accept="image/*" className="image-file-input" onChange={this._handleNewImage.bind(this)} />
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




