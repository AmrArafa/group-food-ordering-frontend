import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import moment from 'moment';
import OrderInHistory from '../OrderInHistory';
import jwt from 'jsonwebtoken';
import {oneOrder, oneOrderInHistory} from '../../apiConfig'; 



export default class OrderHistory extends Component {
    constructor(props){
      super(props);
      this.state = {
        orders: []
      }
    }

    cancelOrder(order, id){
        var newOrders = [...this.state.orders]
        if (newOrders.indexOf(order) != -1) {
            newOrders.splice(newOrders.indexOf(order), 1)
            this.setState({ orders: newOrders })
        }
        Axios.delete(oneOrder(id));
        window.location.reload();
    }

    fetchOrders() {
        const token = localStorage.getItem('jwtToken');
        const loggedInUserIdObject = jwt.decode(token);
        const loggedInUserId = loggedInUserIdObject.user_id;

        const id = loggedInUserId;
        Axios.get(oneOrderInHistory(id))
            .then((response) => {
                this.setState({ orders: response.data });
                
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    componentWillMount() {
        this.fetchOrders();
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
        