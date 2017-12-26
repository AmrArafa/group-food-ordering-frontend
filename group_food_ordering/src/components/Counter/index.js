import React, { Component } from 'react';
import './index.css';

export default class Counter extends Component{
    render(){
        const {count, increment, decrement} = this.props;
        return (
            <div className="clearfix">
                <button onClick={increment}>+</button>
                <p>{count}</p>
                <button onClick={decrement}>-</button>
            </div>
        )
    }
}