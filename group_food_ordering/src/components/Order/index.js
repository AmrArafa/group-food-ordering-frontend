import React, { Component } from 'react';
import './index.css';	
import Axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Checkout from '../Checkout';

class Order extends Component {
    constructor(props){
      super(props);
      this.state = {
        order: {},
        loadingOrder: false
      }
    }

    render(){
        const { order } = this.props;
            if (Object.keys(order).length !== 0) {
                return (
                <div className= 'order'>
                <h3>Your Order</h3>
                    {
                        order.items.map(item => {
                            return (
                                <div>
                                    {item.name} <br/>
                                    Price: {item.price} <br/>
                                    Quantity: {item.quantity}<br/>
                                </div>
                            )
                        })
                    }

                  Total Price:   {order.totalPrice} EGP <br/>
                  <Button >Pay On Delivery </Button>
                 <Checkout
                    name={'Pay for your order'}
                    description={'life is easy'}
                    amount={order.totalPrice}  
                    order={order}                                                  />    
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