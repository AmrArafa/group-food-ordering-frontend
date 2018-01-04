import React, { Component } from 'react';
import Group from '../../containers/GroupContainer';
import './index.css';
import CartItem from '../CartItem';
import Cart from '../../containers/CartContainer';
import {Button } from 'reactstrap';
import moment from 'moment';
import { Link, Route } from 'react-router-dom';

export default class Groups extends Component {

  constructor(){
        super();
        this.state = {
            timeframe: '',
            formattedTime: '',
            cartTotal: 0,
            quantityForItem: 0,
            itemsAndQuantities: []
        }
        this.calculateCartTotal = this.calculateCartTotal.bind(this);
         this.claculateQuantities = this.claculateQuantities.bind(this);
        this.calculateCartTotal = this.calculateCartTotal.bind(this);
        this.updateItemsAndQuantities = this.updateItemsAndQuantities.bind(this);
    }    

  calculateCartTotal(newPrice){
    this.setState({
      cartTotal: this.state.cartTotal + newPrice
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
  }

    render(){
   
      const { order, items, groups, loading, error, createGroup, itemsIdsAndQuantity, createSingleOrder} = this.props;

      if(loading){
            return (
                <div>Is loading</div>
            )
        }else if(error){
            return (
                <div>
                    error
                </div>
            )
        }else{
      return (
        
        <div className='allGroups '>


        {items.map((item) => {
      return  (
                <CartItem item={item}  calculateCart={this.calculateCartTotal} updateItemsAndQuantities={this.updateItemsAndQuantities} itemID={item.id} quantity={item.count} />
                            )
                    }
                    )} <br/>
<div className='clearfix'>
        <h3 >Join a Group Order</h3>
      
      {groups.map((group) => {
      return  (
                <Group group={group} itemsIdsAndQuantity={itemsIdsAndQuantity}/>
                            )
                    }
                    )}
</div>
      <h3>Create a New Group Order</h3>
      Make your order after: 
      <input type="number" value={this.state.timeframe} onChange={this.handleNewGroup.bind(this)} step="30" required/> minutes.
      <Button onClick={() => createGroup(this.state.formattedTime, itemsIdsAndQuantity)}>Create</Button> <br/>
      
        <Link onClick={() => createSingleOrder(itemsIdsAndQuantity)} to='/options/order'>Order Immediately</Link>
      


</div>
      )
        }

}
}


