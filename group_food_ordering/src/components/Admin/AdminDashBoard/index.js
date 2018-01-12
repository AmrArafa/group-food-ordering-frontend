import React, { Component } from 'react';
import './index.css';
import { Card, Button, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Spin } from 'antd';
import jwt from 'jsonwebtoken';

export default class AdminDashBoard extends Component{
	constructor(){
      super();
    }
     componentWillMount(){
     	const { getDashBoard, getAdmin } = this.props;
      const token = localStorage.getItem('jwtToken');
      const loggedInUserID = jwt.decode(token);
      console.log(this.props);
        getDashBoard()
        getAdmin(loggedInUserID.admin_id)
        //getLessItem()
			  // getLessUser()
			  // getMostItem()
			  // getMostUser()
			  // getTotalSold()
			  // getTotalSoldLastDay()
			  // getTotalSoldLastHour()
			  // getTotalSoldLastMonth()		     	
    }
     componentWillReceiveProps(nextProps) {
      if (this.props.Admin.id != nextProps.Admin.id) {
     localStorage.setItem('AdminLastName', nextProps.Admin.last_name);
      }
      
     }

    render(){
    	const { dashboard, loadingDashBoard } = this.props;
          
         if (( dashboard != null  ) && (localStorage.getItem('AdminLastName') != null)){
           return(
            <div className="clearfix">
            <h2> Welcome Back Mr. {localStorage.getItem('AdminLastName')} </h2>
              <Row>
              <Col sm="3">
                <Card body inverse color="success" className="dashBordCard" >
                  <CardTitle>Most Item</CardTitle>
                  <CardText>{dashboard.mostItem.item.name}</CardText>
                  <CardText>Quantity: {dashboard.mostItem.quantity}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="danger" className="dashBordCard">
                  <CardTitle>Less Item</CardTitle>
                  <CardText>{dashboard.lessItem.item.name}</CardText>
                  <CardText>Quantity: {dashboard.lessItem.quantity}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="success" className="dashBordCard">
                  <CardTitle>Most User</CardTitle>
                  <CardText>{dashboard.mostUser.user.first_name} {dashboard.mostUser.user.last_name}</CardText>
                  <CardText>Orders Count: {dashboard.mostUser.orderCount}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="danger" className="dashBordCard">
                  <CardTitle>Less User</CardTitle>
                  <CardText>{dashboard.lessUser.user.first_name} {dashboard.lessUser.user.last_name}</CardText>
                  <CardText>Orders Count: {dashboard.lessUser.orderCount}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="primary" className="dashBordCard">
                  <CardTitle>Total Sold</CardTitle>
                  <CardText>{dashboard.totalSold}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="primary" className="dashBordCard">
                  <CardTitle>Total Sold Last Month</CardTitle>
                  <CardText>{dashboard.totalLastMonth}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="primary" className="dashBordCard">
                  <CardTitle>Total Sold Last Day</CardTitle>
                  <CardText>{dashboard.tatalLastday}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="primary" className="dashBordCard">
                  <CardTitle>Total Sold Last Hour</CardTitle>
                  <CardText>{dashboard.tatalLasthour}</CardText>
                </Card>
              </Col>
            </Row>
        	</div>
        	)
        }else{
            return (
                <Spin />
            )
        }
      }
}
