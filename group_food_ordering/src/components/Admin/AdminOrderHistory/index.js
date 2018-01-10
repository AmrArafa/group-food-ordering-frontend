import React, { Component } from 'react';
import './index.css';	
import AdminOrder from '../AdminOrder';
import { Link } from 'react-router-dom';
export default class AdminOrderHistory extends Component {
    constructor(props) {
      super(props);
    }
    componentWillMount(){
        this.props.getOrders();
    }

    render(){
    	 const { orders, loading, error } = this.props;
        if(loading){
            return (
                <p>Is loading</p>
                )            
        }else if(error){
            return (
                <p>{error}</p>
                )
        }else{
            return (
                <div className='adminItem'>
                    <p>Order History</p>
                    {orders.map((order) => {
                     return  (
                        <AdminOrder order={order} 
                        handleDelete={deleteItem}
                         />
                        )
                     })
                     }
                 </div>
                 
                )
        }
    )}
}
