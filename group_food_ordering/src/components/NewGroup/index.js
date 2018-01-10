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
                <h3>Your Order</h3>
                    {
                        group.orders[0].items.map(item => {
                            return (
                                <div>
                                    {item.name} <br/>
                                    Price: {item.price} EGP<br/>
                                    Quantity: {item.quantity}<br/>
                                </div>
                            )
                        })
                    }

                  Total Price:   {group.totalPrice} EGP <br/>

                  Group order created by: {group.creator_first_name}  {group.creator_last_name} <br/>
                  Group order will be fired within: {diffMinutes} minutes <br/>
                  Members: <br/> {(group.members).map((member) => {
                    return  (
                <div>
                {member.first_name} {member.last_name}
                </div>        
                )
                }
                )}

                  <Button onClick={() => this.willPayOnDelivery()}>Pay On Delivery </Button>
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