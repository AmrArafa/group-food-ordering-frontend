import React, { Component } from 'react';
import moment from 'moment';
import './index.css'; 
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Spin } from 'antd';

export default class AdminOrder extends Component {
  constructor(props){
      super(props);
      this.onEntering = this.onEntering.bind(this);
      this.onEntered = this.onEntered.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false, status: 'More' };
      this.state = {
        order: 'previous'
      }
    }
  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Less' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'More' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

    checkCurrentOrder(){
      const { order } = this.props;
      if (order.time_frame !== undefined){
        var now = moment();
        var a = moment(now,'YYYY-MM-DD HH:mm:ss');
        var b = moment(order.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = b.diff(a, 'minutes');

        if (diffMinutes > 0) {
        this.setState({
        order: 'current'
      })
        } else {
        this.setState({
        order: 'previous'
      });
        }
      }
      else{
        this.setState({
        order: 'previous'
      })
      }

    }

    componentWillMount() {
        this.checkCurrentOrder();
    }
  
    render(){
      const { order, deliveredOrder,  paidOrder } = this.props;
        var now = moment();
        var momentNow = moment(now,'YYYY-MM-DD HH:mm:ss');
        var momentOrder = moment(order.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = momentOrder.diff(momentNow, 'minutes');
        const date = this.props.order.created_at;
        var orderTime = moment(date).format('YYYY-MM-DD HH:mm:ss');
          if (Object.keys(order).length !== 0) {
                return (
                    <div className="clearfix orderH" >
                        <div className="order_name">
                          <p>Order no.: {order.id}</p>
                          <p>Order By : {order.creator_f} {order.creator_l}</p>
                        </div>
                        <div className="order_deliver">
                          {!order.delivered? 
                            <Button onClick={() => deliveredOrder(order.id)}> Order delivered</Button>
                            :
                            <p>Order has been delivered</p>
                          }
                          {order.will_pay_on_delivery? 
                            <Button onClick={() => paidOrder(order.id)}> Order Paid</Button>
                            :
                            <p>Order paid</p> 
                          }
                        </div> 
                        <div className="details">        
                        <p>Total Price:   {order.totalPrice} EGP</p>                        
                        <Collapse
                          isOpen={this.state.collapse}
                          onEntering={this.onEntering}
                          onEntered={this.onEntered}
                          onExiting={this.onExiting}
                          onExited={this.onExited}
                          >
                          <Card>
                            <CardBody>
                            {order.items.map(item => {
                              return (
                                <div>
                                    <p>{item.name}</p> 
                                    <p>Price: {item.price} EGP</p> 
                                    <p>Quantity: {item.quantity}</p>
                                 <h6 className={this.state.order === 'current'? 'visible' : 'invisible'}> Order will be fired within {diffMinutes} minutes. </h6>
                                 </div>
                                )
                                })
                            }
                         <p>Ordered at: {orderTime} </p>                                      
                            </CardBody>
                          </Card>
                        </Collapse>
                        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Show {this.state.status}</Button>
                        </div>
                     </div>
                  )
               }
        else{
          return(
            <div>
               <Spin />
            </div>
            )
         }
        }
    }
