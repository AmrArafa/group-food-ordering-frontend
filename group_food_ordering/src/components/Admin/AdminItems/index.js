import React, { Component } from 'react';
import './index.css';
import AdminItem from '../AdminItem';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AdminItems extends Component {
     componentWillMount(){
        this.props.getItems();
    }
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
                <div className='adminItem'>
                    <p>Menu</p>
                    {items.map((item) => {
                     return  (
                        <AdminItem item={item} 
                        handleDelete={deleteItem}
                         />
                        )
                     })
                     }
                    <Button ><Link to="/admin/menu/add">Add New Item</Link></Button>
                 </div>
                 
                )
        }
    }
}


