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
            itemsAndQuantities: []
        }
        this.updateItemsAndQuantities = this.updateItemsAndQuantities.bind(this);
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

    
  componentWillMount(){
    this.props.getGroups();
  }

  createGroup(time, itemsAndQuantities, loggedInUserId) {
    this.props.createGroup(time, itemsAndQuantities, loggedInUserId);
    history.push('/options/newgroup');
  }

    render(){
      const { order, items, quantities, total, groups, loading, error, createGroup, itemsIdsAndQuantity, createSingleOrder} = this.props;
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
        <div className="options">
          <p className="summary-title">Order Summary</p>
          <div className="title clearfix">
            <p className="item-title">Item</p>
            <p className="price-title">Price</p>
            <p className="quantity-title">Quantity</p>
          </div>
          {items.map((item, index) => {
            return (
              <div className="summary clearfix">
                <p className="summary-item">{item.name}</p>
                <p className="summary-price">{item.price}</p>
                <p className="summary-quantity">{quantities[index]}</p>
              </div>
            )
          })}
          <p className="summary-total">Total: EGP {total}</p>
          <p className="user-message">If you need to edit your order, click on the "Menu" link above and edit your cart, then click "Confirm your order" again.</p>
        <div className='allGroups'>


        
<div className={groups.length === 0 || itemsIdsAndQuantity.length === 0? 'invisible' : 'visible clearfix join-group-area'}>
        <p className="join-group-title">Join a Group Order</p>
        <p className="join-user-instructions">Here you can join a group of your friends and order food together</p>
      
      {groups.map((group) => {
      return  (
                <Group group={group} itemsIdsAndQuantity={itemsIdsAndQuantity}/>
                            )
                    }
                    )}
</div>
<div className={itemsIdsAndQuantity.length === 0? 'invisible' : 'visible'}>
    <div className="create-group-area clearfix">
      <div className="create-group">
        <p className="create-group-title">Create a New Group Order</p>
        <p className="create-user-instructions">Here you can create your own group and anyone of your friends can join you. You only to specify the waiting time (in minutes) to collect your friends' orders, then click "Create"</p>
        <form onSubmit={() => this.createGroup(this.state.formattedTime, itemsIdsAndQuantity, loggedInUserId)}>
          <div className="inner-form clearfix">
            <p className="form-group">Make your order after</p> 
            <input className="form-group" type="number" value={this.state.timeframe} onChange={this.handleNewGroup.bind(this)} required/>
            <p className="form-group"> minutes.</p>
          </div>
          <button className="create-group-button" type="submit">Create</button>
        </form>
      </div>
    </div>
    <Link id="order-immediately-button" onClick={() => createSingleOrder(itemsIdsAndQuantity)} to='/options/order'>Order Immediately</Link>
    <p className="immediate-user-instructions">Here you can order your meal individually</p>
</div>
</div>
</div>
  )}
}}
