import React, { Component } from 'react';
import './index.css';
import  User from '../User';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Users extends Component {
     componentWillMount(){
        this.props.getUsers();
    }
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
                <div className='users'>
                    <p>Users</p>
                    {users.map((user) => {
                     return  (
                        <User user={user} 
                        handleDelete={deleteUser}
                         />
                        )
                     })
                     }
                 </div>
                 
                )
        }
    }
}


