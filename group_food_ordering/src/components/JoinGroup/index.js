import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Checkout from '../Checkout';
import moment from 'moment';


class JoinGroup extends Component {
    constructor(props){
      super(props);
      this.state = {
        group: ''
      }
    }


    fetchGroup() {
        const {id} = this.props.match.params;
         setTimeout(() => {
        Axios.get(`http://localhost:3000/groups/${id}`)
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
                                <div>
                                    {item.name} <br/>
                                    Price: {item.price} EGP<br/>
                                    Quantity: {item.quantity}<br/>
                                </div>
                            )
                        })
                    }

                  Total Price:   {order.totalPrice} EGP <br/>

                  Group order created by: {group.creator_first_name}  {group.creator_last_name} <br/>
                  Group order will be fired within: {diffMinutes} minutes <br/>
                  Members: <br/> {(group.members).map((member) => {
                    return  (
                <div>
                {member.user_first_name} {member.user_last_name}
                </div>        
                )
                }
                )}

                  <Button >Pay On Delivery </Button>
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