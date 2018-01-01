import React, { Component } from 'react';
import './index.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AdminEditItems extends Component {
    componentWillMount(){
              console.log('will mount', this.props)

       const { getItem, match: {params: {id}}} = this.props;
       getItem(id);

    }

   constructor(props){
        super(props);
        // const { getItem, match: {params: {id}}} = this.props;
        console.log('PrOPs', props)
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

    componentDidMount() {
      console.log('in did mount');
      console.log(this.props);
      // this.setState({
      //       name: this.props.item.name,
      //       image: this.props.item.image,
      //       price: 15 ,
      //     })
    }
    render(){
          console.log("in render");
          console.log(this.props);
          console.log('staaate', this.state)
          const { editItem, item } = this.props;
          var itemName = this.state.name
          var itemImage = this.state.image
          var itemPrice = this.state.price
          var itemEdit = {
            name: this.state.name,
            image: this.state.image,
            price: this.state.price
          }

     return (

      <div>
        <p>Edit your item </p>
        <form>
          <div className="itemName">
            <label>Item Name </label>
            <input type="text" name="name" value={itemName} onChange={this._handleChange} />
          </div>
          <div className="itemName">
            <label>Image </label>
            <input type="text" name="image" value={itemImage} onChange={this._handleChange} />
          </div>
          <div className="itemName">
            <label>Price</label>
            <input type="text" name="price" value={itemPrice} onChange={this._handleChange} />
          </div>
        </form>


        <Button onClick={() => editItem(item.id, itemEdit)}> <Link to="/admin/menu">Submit</Link> </Button>

       </div>
       
)
}
}

