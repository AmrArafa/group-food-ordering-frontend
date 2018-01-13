import React, { Component } from 'react';
import './index.css';	
import axios from 'axios';
import { connect } from 'react-redux';
import Checkout from '../Checkout';
import { Link, Redirect } from 'react-router-dom';
import {oneOrder} from '../../apiConfig'; 

class Order extends Component {
    constructor(props){
      super(props);
      this.state = {
        order: {},
        paid: false
      }
    }

    willPayOnDelivery(){
        const { id } = this.props.order;
        axios.patch(oneOrder(id),
    {
      will_pay_on_delivery: true
    })
    .then(() => {
        alert('Thank you for completing the process. Your order will be delivered within 45 min.')
       this.setState({paid: true})
     })
    }


    render(){
        if (this.state.paid){
      return <Redirect to="/menu" />
        }
        const { order } = this.props;
        const price = order.totalPrice * 100

            if (Object.keys(order).length !== 0) {
                return (
                <div className= 'order'>
                <h3>Order Summary</h3>
                    {
                        order.items.map(item => {
                            return (
                                <div className='clearfix'>
                                <div className='left '>
                                    <p>{item.name}</p>
                                    <p className='quantity'>{item.quantity}</p>
                                </div>    
                                      <p className='right '>EGP {item.price} </p>
                                    
                                </div>
                            )
                        })
                    }

                 <div className='clearfix'>
                  <p className='string'>Total</p><p className='total'>  EGP {order.totalPrice}  </p>
                  </div>
                  <p className='text'> Please choose your payment method within 10 minutes. Otherwise, the order will be cancelled.</p>
                  <button className='delivery' onClick={() => this.willPayOnDelivery()}>Pay On Delivery </button>
                 <Checkout
                    name={'Pay for your order'}
                    description={'life is easy'}
                    amount={price}
                    id={order.id} />    
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

const mapStateToProps = (state) => {
    return {
        order: state.groups.order
    }
}

export default connect(mapStateToProps)(Order);