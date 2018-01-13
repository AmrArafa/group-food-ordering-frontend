import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Checkout from '../Checkout';
import moment from 'moment';
import { oneOrder, oneGroup } from '../../apiConfig'; 
import { Redirect } from 'react-router-dom';
import './index.css';   


class JoinGroup extends Component {
    constructor(props){
      super(props);
      this.state = {
        group: '',
        paid: false
      }
    }

    willPayOnDelivery(){
        const { id } = this.props.order;
        Axios.patch(oneOrder(id),
    {
      will_pay_on_delivery: true
    })
    .then(() => {
        alert('Thank you for completing the process.')
       this.setState({paid: true})
     })
    }

    fetchGroup() {
        const {id} = this.props.match.params;
         setTimeout(() => {
        Axios.get(oneGroup(id))
            .then((response) => {
                this.setState({ group: response.data });
                
            })
            .catch(function(error) {
                console.log(error);
            });
             }, 2000)

    }
    componentWillMount() {
        this.fetchGroup();
    }

    render(){
         if (this.state.paid){
      return <Redirect to="/menu" />
        }
        const {group} = this.state;
        const {order} = this.props;

        var now = moment();
        var a = moment(now,'YYYY-MM-DD HH:mm:ss');
        var b = moment(group.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = b.diff(a, 'minutes');

            if (Object.keys(group).length !== 0) {
                return (
                <div className= 'order'>
                <h3>Your Order</h3>
                    {
                        order.items.map(item => {
                            return (
                                  <div className='clearfix'>
                                <div className='left '>
                                    <p>{item.name}</p>
                                    <p className='quantity'>{item.quantity}</p>
                                </div>    
                                      <p className='right '>EGP {item.price} </p>
                                    
                                </div>
                            )
                        })
                    }
  ------------------------------------------------------------------------------------------------------
                  <div className='clearfix'>
                  <p className='string'>Total</p><p className='total'>  EGP {order.totalPrice}  </p>
                  </div>

                 <div className='clearfix'>
                   <div className ='creator'>
                  <h4>Group Order Creator </h4>
                  <p>{group.creator_first_name}  {group.creator_last_name}  </p>
                  </div>
                  <div className='members'>
                   <h4> Members </h4>
                     {(group.members).map((member) => {
                    return  (
                <div>
                <ul>
               <li>{member.user_first_name} {member.user_last_name}</li>
                </ul>
                </div>        
                )
                }
                )}
                </div>
                </div>
                <p className='text2'>Group order will be fired within {diffMinutes} minutes </p>
                  <button className='delivery' onClick={() => this.willPayOnDelivery()}>Pay On Delivery </button>
                 <Checkout
                    name={'Pay for your order'}
                    description={'life is easy'}
                    amount={order.totalPrice * 100}
                    id = {order.id}
                                            />    
                </div>
                )
            }
            else{
                return(<div>
                        LOADING
                    </div>)
            }
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.groups.order
    }
}

export default connect(mapStateToProps)(JoinGroup);