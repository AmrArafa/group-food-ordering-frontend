import React, { Component } from 'react';
import './index.css';	
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Checkout from '../Checkout';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';


class NewGroup extends Component {
    constructor(props){
      super(props);
      this.state = {
        order: {},
        paid: false
      }
    }

    willPayOnDelivery(){
        const { id } = this.props.group.orders[0];
        axios.patch(`http://localhost:3000/orders/${id}`,
    {
      will_pay_on_delivery: true
    })
    .then(() => {
        alert('Thank you for completing the process.');
       this.setState({paid: true})
     })
    }

    render(){
         if (this.state.paid){
      return <Redirect to="/menu" />
        }
        const { group } = this.props;
        var now = moment();
        var a = moment(now,'YYYY-MM-DD HH:mm:ss');
        var b = moment(group.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = b.diff(a, 'minutes');

            if (Object.keys(group).length !== 0) {
                return (
                <div className= 'order'>
                <h3>Order Summary</h3>
                    {
                        group.orders[0].items.map(item => {
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
                         ------------------------------------------------------------------------------------------------------
                  <div className='clearfix'>
                  <p className='string'>Total</p><p className='total'>  EGP {group.totalPrice}  </p>
                  </div>
                   <div className='clearfix'>
                   <div className ='creator'>
                  <h4>Group Order Creator </h4>
                  <p>{group.creator_first_name}  {group.creator_last_name}  </p>
                  </div>
                  <div className='members'>
                   <h4> Members </h4>
                     {(group.members).map((member) => {
                    return  (
                <div>
                <ul>
               <li>{member.first_name} {member.last_name}</li>
                </ul>
                </div>        
                )
                }
                )}
                </div>
                </div>
                  <p className='text2'>Group order will be fired within {diffMinutes} minutes </p>
                

                  <button className='delivery' onClick={() => this.willPayOnDelivery()}>Pay On Delivery </button>
                 <Checkout
                    name={'Pay for your order'}
                    description={'life is easy'}
                    amount={group.totalPrice * 100} 
                    id={group.orders[0].id}  
                                                                     />    
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
        group: state.groups.group
    }
}

export default connect(mapStateToProps)(NewGroup);