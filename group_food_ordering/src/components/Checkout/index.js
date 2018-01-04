import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../../constants/stripe';

const CURRENCY = 'EGP';

const fromEuroToCent = amount => amount * 100;

const successPayment = (order, data) => {
  console.log(data);
  // const {id} = this.props.order;
  alert('Payment Successful');
  // axios.patch(`http://localhost:3000/orders/${id}`,
  //   {
  //     paid: true
  //   })
};


// const updatePayment = data => {
//    const {id} = this.props.order;
//    axios.patch(`http://localhost:3000/orders/${id}`,
//     {
//        paid: true
//     })
// };

const errorPayment = data => {
  
  alert('Payment Error');
  console.log(data);

};

const onToken = (amount, description, order) => token =>

   axios.post('http://localhost:3000/charges',
    {
      stripeToken: token.id,
      amount: fromEuroToCent(amount),
      description,
      currency: CURRENCY
    })
    .then(successPayment.bind(null, order))
    .catch(errorPayment);

const Checkout = ({ name, description, amount, order}) =>{
  console.log(this);

return(
  <StripeCheckout
   name={name}
   description={description}
   amount={fromEuroToCent(amount)}
   token={onToken(amount, description)}
  currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    order={order}
  />)
}

export default Checkout;


