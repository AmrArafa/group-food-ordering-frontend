import React, { Component } from 'react';
import './index.css';	
import Axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class Order extends Component {
    constructor(props){
      super(props);
      this.state = {
        order: {},
        loadingOrder: false,
        totalPrice: 0

      }
    }

    calcTotalPrice(){
        var items = this.props.order.items;
        var totalPrice = 0;
        for (var i = 0; i < items.length; i++) {
            totalPrice += ((items[i].price) * (items[i].quantity));
        }
        this.setState({
            totalPrice: totalPrice
           })
        }


componentWillMount (){
        this.calcTotalPrice();
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
                                    totalPrice : {this.state.totalPrice}
                             <Button >Pay On Delivery </Button>
                            <Button >Pay Online </Button>
                    
                                </div>
                            )
                        })
                    }
                </div>
                )
            }
            else{
                return(<div>
                        LOADING
                    </div>

                    )
            }
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.groups.order
    }
}

export default connect(mapStateToProps)(Order);