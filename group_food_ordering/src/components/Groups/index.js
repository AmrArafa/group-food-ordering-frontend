import React, { Component } from 'react';
import Group from '../Group';
import './index.css';
import CartItem from '../../containers/CartItemContainer';
import {Button } from 'reactstrap';

export default class Groups extends Component {

  constructor(){
        super();
        this.state = {
            newGroup: '',
            cartTotal: 0
        }
        this.calculateCartTotal = this.calculateCartTotal.bind(this);
    }    

  calculateCartTotal(newPrice){
    this.setState({
      cartTotal: this.state.cartTotal + newPrice
    });
  }

  
    
    componentWillMount (){
        this.props.getGroups();
    }

    render(){
      const { items, groups, loading, error, createGroup} = this.props;

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

        {items.map((item) => {
      return  (
                <CartItem item={item}  calculateCart={this.calculateCartTotal} itemID={item.id} quantity={item.count} />
                            )
                    }
                    )} <br/>
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
               