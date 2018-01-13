import React, { Component } from 'react';
import './index.css';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Spin } from 'antd';
import jwt from 'jsonwebtoken';

export default class AdminDashBoard extends Component{
	  componentWillMount(){
     	const { getDashBoard, getAdmin } = this.props;
      const token = localStorage.getItem('jwtToken');
      const loggedInUserID = jwt.decode(token);
      console.log(this.props);
        getDashBoard()
        getAdmin(loggedInUserID.admin_id)	     	
    }
     componentWillReceiveProps(nextProps) {
      if (this.props.Admin.id !== nextProps.Admin.id) {
     localStorage.setItem('AdminLastName', nextProps.Admin.last_name);
      }
      
     }

    render(){
    	const { dashboard } = this.props;
          
         if (( dashboard != null  ) && (localStorage.getItem('AdminLastName') != null)){
           return(
            <div className="clearfix">
            <h2 className="welcome-admin"> Welcome Back Mr. {localStorage.getItem('AdminLastName')} </h2>
              <Row>
              <Col sm="3">
                <Card body inverse color="success" className="dashBordCard" >
                  <CardTitle>Most Ordered Item</CardTitle>
                  <CardText>{dashboard.mostItem.item.name}</CardText>
                  <CardText>Quantity: {dashboard.mostItem.quantity}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="danger" className="dashBordCard">
                  <CardTitle>Least Ordered Item</CardTitle>
                  <CardText>{dashboard.lessItem.item.name}</CardText>
                  <CardText>Quantity: {dashboard.lessItem.quantity}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="success" className="dashBordCard">
                  <CardTitle>Most Active User</CardTitle>
                  <CardText>{dashboard.mostUser.user.first_name} {dashboard.mostUser.user.last_name}</CardText>
                  <CardText>Number of Orders: {dashboard.mostUser.orderCount}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="danger" className="dashBordCard">
                  <CardTitle>Least Active User</CardTitle>
                  <CardText>{dashboard.lessUser.user.first_name} {dashboard.lessUser.user.last_name}</CardText>
                  <CardText>Number of Orders: {dashboard.lessUser.orderCount}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="primary" className="dashBordCard">
                  <CardTitle>Total Sales</CardTitle>
                  <CardText>EGP {dashboard.totalSold}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="primary" className="dashBordCard">
                  <CardTitle>Total Sales for Last Month</CardTitle>
                  <CardText>EGP {dashboard.totalLastMonth}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="primary" className="dashBordCard">
                  <CardTitle>Total Salse for Last Day</CardTitle>
                  <CardText>EGP {dashboard.tatalLastday}</CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body inverse color="primary" className="dashBordCard">
                  <CardTitle>Total Sales for Last Hour</CardTitle>
                  <CardText>EGP {dashboard.tatalLasthour}</CardText>
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
