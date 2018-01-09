import React, { Component } from 'react';
import './index.css';

export default class AdminDashBoard extends Component{
	constructor(){
      super();
    }
     componentWillMount(){
     	const { getLessItem, getLessUser, getMostItem, getMostUser, getTotalSold, 
     		getTotalSoldLastDay, getTotalSoldLastHour, getTotalSoldLastMonth } = this.props;
     		getLessItem()
			  getLessUser()
			  getMostItem()
			  getMostUser()
			  getTotalSold()
			  getTotalSoldLastDay()
			  getTotalSoldLastHour()
			  getTotalSoldLastMonth()		     	
    }

    render(){
    	const { mostItem, lessItem, mostUser, lessUser, 
    		totalSold, totalSoldLastMonth, totalSoldLastDay, totalSoldLastHour
      } = this.props;
        console.log(this.props.loading)
         if(mostItem && lessItem && mostUser && lessUser && totalSold && totalSoldLastHour && totalSoldLastMonth &&totalSoldLastDay){
        	return(
        		<div>
        		<p className="p"> Most Item {mostItem.item.name} Quantity: {mostItem.quantity}</p>
                <p className="p"> Less Item {lessItem.item.name} Quantity: {lessItem.quantity}</p>
                <p className="p"> Most User {mostUser.user.first_name} {mostUser.user.last_name} Orders Count: {mostUser.orderCount}</p>
                <p className="p"> Less User {lessUser.user.first_name} {lessUser.user.last_name} Orders Count: {lessUser.orderCount}</p>
                <p className="p">total Sold:{totalSold} </p>
                <p className="p">total Sold Last Month: {totalSoldLastMonth} </p>
                <p className="p">total Sold Last Day: {totalSoldLastDay} </p>
                <p className="p">total Sold Last Hour: {totalSoldLastHour} </p>
        		</div>
        	)
        }else{
            return (
                <p>loading</p>
            )
        }
      }
}
