import React, { Component } from 'react';
import './index.css';
import Item from '../../containers/ItemContainer';


export default class Cart extends Component {
    
    render(){
        const { items} = this.props;
        console.log(items);
      return  ( <div className='cart'>
        
      
        
        {items.map((item) => {
      return  (
                <Item item={item} />
                            )
                    }
                    )}

</div>
        )
  }
               
    
    }

