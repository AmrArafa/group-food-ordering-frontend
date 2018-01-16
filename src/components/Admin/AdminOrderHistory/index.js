import React, { Component } from 'react';
import Axios from 'axios';
import { FormGroup, Label, Input } from 'reactstrap';
import AdminOrder from '../AdminOrder';
import { adminOrders, adminOrder, adminOrderFilter } from '../../../apiConfig'
import './index.css'; 
import { Spin } from 'antd';
import 'antd/lib/spin/style/index.css';




export default class OrderHistory extends Component {
    constructor(props){
      super(props);
          this.state = {
            orders: null,
            created_at: ''
          },
          this._handleChange = this._handleChange.bind(this)
    }
     _handleChange(e){
      this.getOrdersFilter(e.target.value)
    }
   paidOrder(id){
        var orders = [...this.state.orders]
        var new_orders = orders.map((order) => {
            if (order.id === id){
                order.paid_on_delivery = true;
            }
            return order
        })
        this.setState({orders: new_orders});
        Axios.patch(adminOrder(id), {"paid_on_delivery": true});
    }
    deliveredOrder(id){
        var orders = [...this.state.orders]
        var new_orders = orders.map((order) => {
            if (order.id === id){
                order.delivered = true
            }
            return order
        })
        this.setState({orders: new_orders});
        Axios.patch(adminOrder(id), {"delivered": true});
    }
    getOrdersFilter(created_at) {
        Axios.get(adminOrderFilter(created_at))
            .then((response) => {
                this.setState({ orders: response.data});
            })
            .catch(function(error){
                console.log(error);
            });
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
        const {orders } = this.state;
        if( orders === null ){
            return (
                <div className="Spin">
                    <Spin />
                </div>
                )            
        }else{
            return (
                <div className="clearfix">
                        <FormGroup id="filer"  className="col-3"  >
                            <Label for="orderFilter" >Filter</Label>
                            <Input type="select" name="created_at" id="orderFilter"  onChange={this._handleChange}>
                                <option>All</option>
                                <option>Last Hour</option>
                                <option>Last Day</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                            </Input>
                        </FormGroup>
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
}
        