import React, { Component } from 'react';
import './index.css';
import AdminItem from '../AdminItem';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


export default class AdminItems extends Component {
     componentWillMount(){
        this.props.getItems();
    }

    submit(id){
    confirmAlert({
      title: 'Delete Item',                        // Title dialog
      message: 'Are you sure to do this.',               // Message dialog
      confirmLabel: 'Confirm',                           // Text button confirm
      cancelLabel: 'Cancel',                             // Text button cancel
      onConfirm: () =>(this.props.deleteItem(id)),    // Action after Confirm
      onCancel: () => alert('Delete Canceld'),      // Action after Cancel
    })
  };
    render(){
        const { items, loading, error, deleteItem } = this.props;
        
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
              <div>
                <div className='adminItem clearfix'>
                    <p className="admin-menu">Menu</p>
                    {items.map((item) => {
                     return  (
                        <AdminItem item={item} 
                        handleDelete={this.submit.bind(this)}
                         />
                        )
                     })
                     }
                 </div>
                 <div className="divItem">
                    <Link className="addItem" to="/admin/menu/add">Add New Item</Link>
                 </div>
                 </div>
                )
        }
    }
}


