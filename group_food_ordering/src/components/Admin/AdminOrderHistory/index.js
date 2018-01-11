import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import moment from 'moment';
import AdminOrder from '../AdminOrder';
import { adminOrders, adminOrder } from '../../../apiConfig'



export default class OrderHistory extends Component {
    constructor(props){
      super(props);
      this.state = {
        orders: []
      }
    }
   paidOrder(id){
        var orders = [...this.state.orders]
        var new_orders = orders.map((order) => {
            if (order.id === id){
                order.paid_on_delivery = true;
             // this.setState({orders: {...orders, order}})
            }
            return order
            // else{
            //     this.setState({orders: orders})
            // }
        })
        this.setState({orders: new_orders});
        Axios.patch(adminOrder(id), {"paid_on_delivery": true});
    }
    deliveredOrder(id){
        var orders = [...this.state.orders]
        var new_orders = orders.map((order) => {
            if (order.id === id){
                order.delivered = true
            //this.setState({orders: {...orders, order}})
            }
            return order
            // else{
            //     this.setState({orders: orders})
            // }
        })
        this.setState({orders: new_orders});
        Axios.patch(adminOrder(id), {"delivered": true});
    }

    getOrders() {
        Axios.get(adminOrders)
            .then((response) => {
                this.setState({ orders: response.data });
                
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    componentWillMount() {
        this.getOrders();
    }
    render(){
        const {orders} = this.state;
        return (
            <div className="clearfix">
               { 
                orders.map((order) => {
                    return (
                        <div>
                        <AdminOrder order={order} paidOrder={this.paidOrder.bind(this)} deliveredOrder={this.deliveredOrder.bind(this)} />
                        </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
        