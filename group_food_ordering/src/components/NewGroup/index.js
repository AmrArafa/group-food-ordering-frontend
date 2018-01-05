import React, { Component } from 'react';
import './index.css';	
import Axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Checkout from '../Checkout';
import moment from 'moment';


class NewGroup extends Component {
    constructor(props){
      super(props);
      this.state = {
        order: {}
      }
    }

    render(){
        const { group } = this.props;
        var now = moment();
        var a = moment(now,'YYYY-MM-DD HH:mm:ss');
        var b = moment(group.time_frame,'YYYY-MM-DD HH:mm:ss');
        var diffMinutes = b.diff(a, 'minutes');

            if (Object.keys(group).length !== 0) {
                return (
                <div className= 'order'>
                <h3>Your Order</h3>
                    {
                        group.orders[0].items.map(item => {
                            return (
                                <div>
                                    {item.name} <br/>
                                    Price: {item.price} EGP<br/>
                                    Quantity: {item.quantity}<br/>
                                </div>
                            )
                        })
                    }

                  Total Price:   {group.totalPrice} EGP <br/>

                  Group order created by: {group.creator_first_name}  {group.creator_last_name} <br/>
                  Group order will be fired within: {diffMinutes} minutes <br/>
                  Members: <br/> {(group.members).map((member) => {
                    return  (
                <div>
                {member.first_name} {member.last_name}
                </div>        
                )
                }
                )}

                  <Button >Pay On Delivery </Button>
                 <Checkout
                    name={'Pay for your order'}
                    description={'life is easy'}
                    amount={group.totalPrice}  
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
        group: state.groups.group
    }
}

export default connect(mapStateToProps)(NewGroup);