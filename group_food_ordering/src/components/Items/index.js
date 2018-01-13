import React, { Component } from 'react';
import Item from '../../containers/ItemContainer';
import './index.css';
import Cart from '../../containers/CartContainer'


export default class Items extends Component {
	
    componentWillMount (){
       
        this.props.getItems();
    }

    render(){
        

    	const { items, loading, error} = this.props;
    	if(loading){
            return (
                <div>Is loading</div>
            )
        }else if(error){
            return (
                <div>
                    message={error}
                    type="error"
                </div>
            )
        }else{
    	return (
            
            
    		<div className='allItems clearfix'>
            <h2 className="Welcome-user">Hello {localStorage.getItem('UserFirstName')}</h2>
    	
    	{items.map((item) => {
      return  (
                <Item item={item} />
                            )
                    }
                    )}
        <Cart />
</div>
    	)
    	
    }
}
}
