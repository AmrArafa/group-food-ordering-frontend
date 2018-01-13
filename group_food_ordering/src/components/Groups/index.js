import React, { Component } from 'react';
import Group from '../../containers/GroupContainer';
import './index.css';
import CartItem from '../CartItem';
import Cart from '../../containers/CartContainer';
import {Button } from 'reactstrap';
import moment from 'moment';
import { Link, Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import history from '../../history';

export default class Groups extends Component {

  constructor(){
        super();
        this.state = {
            timeframe: '',
            formattedTime: '',
            cartTotal: 0,
            quantityForItem: 0,
            itemsAndQuantities: [],
            cartArray: []
        }
        this.calculateCartTotal = this.calculateCartTotal.bind(this);
        this.updateItemsAndQuantities = this.updateItemsAndQuantities.bind(this);
        this.updateCartArray = this.updateCartArray.bind(this);
    }    

  calculateCartTotal(newPrice){
    this.setState({
      cartTotal: this.state.cartTotal + newPrice
    });
  }

  updateCartArray(itemName, itemPrice, quantity){
    var newArray = this.state.cartArray.slice();
    if (newArray.length === 0){
      this.setState({
        cartArray: [{name: itemName, price: itemPrice, quantity: quantity}]
      });
      return;
    }
    for (var i = 0; i < newArray.length; i++){
      if (newArray[i].name === itemName){
        if (quantity === 0){
          newArray.splice(i, 1);
          break;
        }else if (quantity < 0){
          newArray[i].quantity -= 1;
          break;
        }else{
          newArray[i].quantity += 1;
          break;
        }
      }else if(i === newArray.length - 1){
        newArray.push({name: itemName, price: itemPrice, quantity: quantity});
        break;
      }
    }
    this.setState({
      cartArray: newArray
    });
  }

  updateItemsAndQuantities(item_id,quantity){
    var newArray = this.state.itemsAndQuantities.slice();
    if (newArray.length === 0){
      this.setState({
        itemsAndQuantities: [{item_id: item_id, quantity: quantity}]
      });
      return;
    }
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i].item_id === item_id){
        if (quantity === 0){
          newArray.splice(i, 1);
          break;
        }else if (quantity < 0){
          newArray[i].quantity -= 1;
          break;
        }else{
          newArray[i].quantity += 1;
          break;
        }
      }else if(i === newArray.length - 1){
        newArray.push({item_id: item_id, quantity: quantity});
        break;
      }
    }
    this.setState({
      itemsAndQuantities: newArray
    });
  }


  handleNewGroup(e){
    var d1 = new Date (),
    d2 = new Date ( d1 );
    d2.setMinutes ( d1.getMinutes() + parseInt(e.target.value) );
    var timeFrame = moment(d2).format('YYYY-MM-DD HH:mm:ss');
    this.setState({
      timeframe: e.target.value,
      formattedTime: timeFrame
    });
  }

    
  componentWillMount (){
    this.props.getGroups();
    this.setState({
      ...this.state,
      cartArray: JSON.parse(localStorage.cartArray)
    });
  }

  createGroup(time, itemsAndQuantities, loggedInUserId) {
    this.props.createGroup(time, itemsAndQuantities, loggedInUserId);
    history.push('/options/newgroup');
  }

    render(){
      const { order, items, groups, loading, error, createGroup, itemsIdsAndQuantity, createSingleOrder} = this.props;
      const token = localStorage.getItem('jwtToken');
      const loggedInUserIdObject = jwt.decode(token);
      const loggedInUserId = loggedInUserIdObject.user_id;

      if(loading){
            return (
                <div>Loading...</div>
            )
        }else if(error){
            return (
                <div>
                    error
                </div>
            )
        }else{
      return (
        <div>
          <p>Order Summary</p>
          {JSON.parse(localStorage.cartArray).map((item) => {
            return (
              <div className="summary clearfix">
                <p className="summary-name">{item.name}</p>
                <p className="summary-price">{item.price}</p>
                <p className="summary-quantity">{item.quantity}</p>
              </div>
            )
          })}
          <p className="summary-total">Total: {localStorage.cartTotal} EGP</p>
        <div className='allGroups'>


        
<div className={groups.length === 0 || itemsIdsAndQuantity.length === 0? 'invisible' : 'visible clearfix'}>
        <h3 >Join a Group Order</h3>
      
      {groups.map((group) => {
      return  (
                <Group group={group} itemsIdsAndQuantity={itemsIdsAndQuantity}/>
                            )
                    }
                    )}
</div>
<div className={itemsIdsAndQuantity.length === 0? 'invisible' : 'visible'}>
      <h3>Create a New Group Order</h3>
      Make your order after: 
      <form onSubmit={() => this.createGroup(this.state.formattedTime, itemsIdsAndQuantity, loggedInUserId)}>
        <input type="number" value={this.state.timeframe} onChange={this.handleNewGroup.bind(this)} required/> minutes.
         <button type="submit">Create</button>
       </form>
       <h3>
        <Link onClick={() => createSingleOrder(itemsIdsAndQuantity)} to='/options/order'>Order Immediately</Link>
      </h3>

</div>
</div>
</div>
      )
        }

}
}
