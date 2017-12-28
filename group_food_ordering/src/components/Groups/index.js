import React, { Component } from 'react';
import Group from '../Group';
import './index.css';
import CartItem from '../CartItem';

export default class Groups extends Component {
    
    componentWillMount (){
        this.props.getGroups();
    }

    render(){
      const { items, groups, loading, error} = this.props;
      console.log(items);

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
        <div className='allGroups'>

        {items.map((item) => {
      return  (
                <CartItem item={item} />
                            )
                    }
                    )} <br/>
      
      {groups.map((group) => {
      return  (
                <Group group={group} items={items}/>
                            )
                    }
                    )}
</div>
      )
      
    }
}
}
               