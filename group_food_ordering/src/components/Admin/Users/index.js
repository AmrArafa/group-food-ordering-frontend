import React, { Component } from 'react';
import './index.css';
import  User from '../User';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


export default class Users extends Component {
     componentWillMount(){
        this.props.getUsers();
    }
    submit(id){
    confirmAlert({
      title: 'Delete User',                        // Title dialog
      message: 'Are you sure to do this.',               // Message dialog
      confirmLabel: 'Confirm',                           // Text button confirm
      cancelLabel: 'Cancel',                             // Text button cancel
      onConfirm: () =>(this.props.deleteUser(id)),    // Action after Confirm
      onCancel: () => alert('Delete Canceld'),      // Action after Cancel
    })
    };
    render(){
        const { users, loading, error, deleteUser} = this.props;
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
                <div className='users clearfix'>
                    <div className="admin-title">
                        <p>Users List</p>
                    </div>
                    {users.map((user) => {
                     return  (
                        <User user={user} 
                        handleDelete={this.submit.bind(this)}
                         />
                        )
                     })
                     }
                 </div>
                 
                )
        }
    }
}


