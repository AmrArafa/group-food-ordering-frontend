import React, { Component } from 'react';
import moment from 'moment';
import './index.css'; 
import Checkout from '../Checkout';
import axios from 'axios';
import {oneOrder} from '../../apiConfig'; 


export default class OrderInHistory extends Component {
  constructor(props){
      super(props);
      this.state = {
        order: 'previous'
      }
    }

       willPayOnDelivery(){
        const { id } = this.props.order;
        axios.patch(oneOrder(id),
    {
      will_pay_on_delivery: true
    })
    .then(() => {
        alert('Thank you for completing the process. Your order will be delivered within 45 min.');
       window.location.reload();
     })
    }

    checkCurrentOrder(){
      const { order } = this.props;
      if (order.time_frame !== undefined){
        var now = moment();
        var a = moment(now,'YYYY-MM-DD HH:mm:ss');
        var b = moment(order.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = b.diff(a, 'minutes');

        if (diffMinutes >= 0) {
        this.setState({
        order: 'current'
      })
        } else {
        this.setState({
        order: 'previous'
      });
        }
      }
      else{
        this.setState({
        order: 'previous'
      })
      }

    }

    componentWillMount() {
        this.checkCurrentOrder();
    }
  
    render(){
 
      const { order, cancelOrder } = this.props;
        var now = moment();
        var a = moment(now,'YYYY-MM-DD HH:mm:ss');
        var b = moment(order.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = b.diff(a, 'minutes');
        const date = this.props.order.created_at;
        var orderTime = moment(date).format('Do MMMM YYYY, h:mm:ss a');
          if (Object.keys(order).length !== 0) {
                return (
                <div className='order'>
                <h2 className='id'>{order.id}</h2>
                    {
                        order.items.map(item => {
                            return (
                                <div className='clearfix right-left'>
                    
                                 <div className='left '>
                                   <p>{item.name}</p>
                                   
                                   <p className='quantity'>{item.quantity}</p>
                                    </div>
                                    <p className='right '>EGP {item.price} </p>
                                </div>
                            )
                        })
                    }
                    ------------------------------------------------------------------------------------------------------
<div className='clearfix'>
                  <p className='string'>Total</p><p className='total'>  EGP {order.totalPrice}  </p>
                  </div>
                  <p className='string2'>Date of Order</p> <p className='date'>{orderTime} </p>
              
                  
                  <p className={this.state.order === 'current'? 'visible text' : 'invisible'}> Your group order will be fired within {diffMinutes} minutes</p>
                  <button className={this.state.order === 'current'? 'visible cancel' : 'invisible'} onClick={() => cancelOrder(order, order.id)}>Cancel Order</button>
                  {order.group_id == null ?
                  <button className={!order.paid_online && !order.will_pay_on_delivery ? 'visible' : 'invisible'} onClick={() => cancelOrder(order, order.id)}>Cancel Order</button>
                  :
                  console.log('hi')
                   }
                  {
                    order.paid_online || order.will_pay_on_delivery
                    ? 
                    console.log('paid')
                    : 
                    <div>
                    <button className='delivery' onClick={() => this.willPayOnDelivery()}>Pay On Delivery </button>
                     <Checkout 
                    name={'Pay for your order'}
                    description={'life is easy'}
                    amount={order.totalPrice * 100}
                    id={order.id} /> <br/>
                      </div>

                  }
                  
                     
                </div>
                )
            }
            else{
                return(<div>
                        LOADING
                    </div>)
            }
        }
    }