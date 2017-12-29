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
        console.log("hamdaawi", this.props)
        const { items, loading, error, deleteItem, sendItem } = this.props;
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
                         sendItem={sendItem}
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


