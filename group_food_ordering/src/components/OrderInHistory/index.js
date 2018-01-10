import React, { Component } from 'react';
import moment from 'moment';
import './index.css'; 
import { Button } from 'reactstrap';
import Checkout from '../Checkout';
import axios from 'axios';

export default class Item extends Component {
  constructor(props){
      super(props);
      this.state = {
        order: 'previous'
      }
    }

       willPayOnDelivery(){
        const { id } = this.props.order;
        axios.patch(`http://localhost:3000/orders/${id}`,
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
        var orderTime = moment(date).format('YYYY-MM-DD HH:mm:ss');
          if (Object.keys(order).length !== 0) {
                return (
                <div className= {this.state.order}>
                Order no.: {order.id}
                    {
                        order.items.map(item => {
                            return (
                                <div>

                                    {item.name} <br/>
                                    Price: {item.price} EGP<br/>
                                    Quantity: {item.quantity}<br/>
                                </div>
                            )
                        })
                    }

                  Total Price:   {order.totalPrice} EGP <br/>
                  Ordered at: {orderTime} <br/>
              
                  
                  <h6 className={this.state.order === 'current'? 'visible' : 'invisible'}> Your group order will be fired within {diffMinutes} minutes. </h6>
                  <Button className={this.state.order === 'current'? 'visible' : 'invisible'} onClick={() => cancelOrder(order, order.id)}>Cancel Order</Button><br/>
                  {
                    order.paid_online || order.will_pay_on_delivery
                    ? 
                    console.log('none')
                    : 
                    <div>
                    <Button onClick={() => this.willPayOnDelivery()}>Pay On Delivery </Button>
                     <Checkout 
                    name={'Pay for your order'}
                    description={'life is easy'}
                    amount={order.totalPrice * 100}
                    id={order.id} /> <br/>
                      </div>

                  }
                  
                  ================================================
                     
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