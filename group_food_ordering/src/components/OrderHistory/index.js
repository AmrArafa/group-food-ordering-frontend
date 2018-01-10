import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import moment from 'moment';
import OrderInHistory from '../OrderInHistory';
import jwt from 'jsonwebtoken';



export default class OrderHistory extends Component {
    constructor(props){
      super(props);
      this.state = {
        orders: []
      }
    }

    deleteUnpaidOrders(){
        const {orders} = this.state;
        orders.map((order) => {
            if (order.time_frame !== undefined){
            var now = moment();
            var a = moment(now,'YYYY-MM-DD HH:mm:ss');
            var b = moment(order.time_frame,'YYYY-MM-DD HH:mm:ss');
            var diffMinutes = b.diff(a, 'minutes');

            if (diffMinutes <= 0 && order.paid == false) {
                Axios.delete(`http://localhost:3000/orders/${order.id}`);
            }

        }
    }
        )

    }

    cancelOrder(order, id){
        var newOrders = [...this.state.orders]
        if (newOrders.indexOf(order) != -1) {
            newOrders.splice(newOrders.indexOf(order), 1)
            this.setState({ orders: newOrders })
        }
        Axios.delete(`http://localhost:3000/orders/${id}`);
        window.location.reload();
    }

    fetchOrders() {
        const token = localStorage.getItem('jwtToken');
        const loggedInUserIdObject = jwt.decode(token);
        const loggedInUserId = loggedInUserIdObject.user_id;

        const id = loggedInUserId;
        console.log(id);
        Axios.get(`http://localhost:3000/orders?user_id=${id}`)
            .then((response) => {
                this.setState({ orders: response.data });
                
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    componentWillMount() {
        this.fetchOrders();
        this.deleteUnpaidOrders();
    }

    render(){
        const {orders} = this.state;
        return (
            <div>
       { 
        orders.map((order) => {
            return (
                <div>
                <OrderInHistory order={order} cancelOrder={this.cancelOrder.bind(this)} />
                </div>
                    )
                }
            )
        }
        </div>
        )
    }
}
        