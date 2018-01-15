import React, { Component } from 'react';
import './index.css';
import  User from '../User';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Spin } from 'antd';
import 'antd/lib/spin/style/index.css';


export default class Users extends Component {
     componentWillMount(){
        this.props.getUsers();
    }
    submit(id){
    confirmAlert({
      title: 'Delete User',                       
      message: 'Are you sure to do this.',            
      confirmLabel: 'Confirm',                         
      cancelLabel: 'Cancel',                           
      onConfirm: () =>(this.props.deleteUser(id)),    
      onCancel: () => alert('Delete Canceld'),      
      })
    };
    render(){
        const { users, loading, error} = this.props;
        if(loading){
            return (
                <Spin />
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


