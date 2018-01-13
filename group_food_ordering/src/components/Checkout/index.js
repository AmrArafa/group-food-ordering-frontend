import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import { Redirect } from 'react-router-dom';

export default class Checkout extends Component {

  constructor(){
    super();
    this.state = {
      paid: false,
    }
  }

successPayment = (data) => {
  const {id} = this.props;
  alert('Payment Successful');
  axios.patch(`http://localhost:3000/orders/${id}`,
    {
      paid_online: true
    })
    .then(() => {
       this.setState({paid: true})
     })
}

errorPayment = (data) => {
alert('Payment Error');
}

onToken = (amount, description) => token =>

   axios.post('http://localhost:3000/charges',
    {
      stripeToken: token.id,
      amount: amount,
      description,
      currency: 'EGP'
    })
    .then(this.successPayment)
    .catch(this.errorPayment);

render(){
  if (this.state.paid){
      return <Redirect to="/menu" />
    }
  const {description, amount, name} = this.props;
  return(
  <StripeCheckout
   name={name}
   description={description}
   amount={amount}
   token={this.onToken(amount, description)}
  currency={'EGP'}
    stripeKey={STRIPE_PUBLISHABLE}
  />)
  }
}