import React, { Component } from 'react';
import Group from '../Group';
import './index.css';
import CartItem from '../CartItem';
import Cart from '../../containers/CartContainer';
import {Button } from 'reactstrap';

export default class Groups extends Component {

  constructor(){
        super();
        this.state = {
            newGroup: '',
            cartTotal: 0,
            itemsAndQuantities: []
        }
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
    
  componentWillMount (){
    this.props.getGroups();
  }

    render(){
      const { items, groups, loading, error, createGroup} = this.props;
      console.log(this.props.items);

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
        <div className='allGroups'>

        <Cart />
        <h3>Join a Group Order</h3>
      
      {groups.map((group) => {
      return  (
                <Group group={group} items={items}/>
                            )
                    }
                    )}

      <h3>Create a New Group</h3>
      Make your order after:
      <input type="number" value={this.state.newGroup} onChange={event => this.setState({newGroup: event.target.value})} step="30" required/> minutes.
      <Button onClick={value => {createGroup(value, () => this.setState({newGroup: ''}));}}>Create</Button> <br/>
      <Button> Order Now </Button>


</div>
      )
      
    }

}
}

// {items.map((item) => {
//       return  (
//                 <CartItem item={item}  calculateCart={this.calculateCartTotal} updateItemsAndQuantities={this.updateItemsAndQuantities} item_id={item.id} quantity={item.count} />
//                             )
//                     }
//                     )} <br/>