import React, { Component } from 'react';
import './index.css';
import AdminItem from '../AdminItem';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


export default class AdminItems extends Component {
     componentWillMount(){
        this.props.getItems();
    }

    submit(id){
    confirmAlert({
      title: 'Delete Item',                        
      message: 'Are you sure to do this.',               
      confirmLabel: 'Confirm',                           
      cancelLabel: 'Cancel',                             
      onConfirm: () =>(this.props.deleteItem(id)),    
      onCancel: () => alert('Delete Canceld'),     
    })
  };
    render(){
        const { items, loading, error } = this.props;
        
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


