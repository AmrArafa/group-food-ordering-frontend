import React, { Component } from 'react';
import './index.css';
import  Admin from '../Admin';
import { Button, Form, Input, FormGroup, Col, FormText, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


export default class Admins extends Component {
    constructor(){
      super();
        this.state = {
            email: '',
            success: '',
           
          }
          this._handleChange = this._handleChange.bind(this)
    }
     componentWillMount(){
        this.props.getAdmins();
    }
    submit(id){
      confirmAlert({
        title: 'Delete Admin',                        // Title dialog
        message: 'Are you sure to Delete this Admin?.',               // Message dialog
        confirmLabel: 'Confirm',                           // Text button confirm
        cancelLabel: 'Cancel',                             // Text button cancel
        onConfirm: () =>(this.props.deleteAdmin(id)),    // Action after Confirm
        onCancel: () => alert('Delete Canceld'),      // Action after Cancel
      })
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.success) {
        this.setState({email: ''});
        this.setState({success: 'SUCCESS'});

      }
    }

     _handleChange(e){
      this.setState({...this.state, [e.target.name] :e.target.value})
    }
    
    render(){
      console.log('this is Porps')
        console.log(this.props)
        const { admins, loading, error, deleteAdmin, addAdmin} = this.props;
        var admin = { admin: {
          email: this.state.email
        }
        }
        if(loading){
            return (
                <p>Is loading</p>
                )            
        }else if(error){
            return (
                <p>{error}</p>
                )
        }else{
            return (
                <div className='admins clearfix'>
                  <div className="admin-title">
                    <p>Admins</p>
                  </div>
                  <Form id="addAdminForm">
                    <FormGroup row>
                      <Label for="Invitation" sm={1} color="red">Invitation </Label>
                      <Col sm={6}>
                        <Input type="text" name="email" id="Invitation" value={this.state.email} placeholder="Put E-mail For New Admin" onChange={this._handleChange} />
                      </Col>
                        <div className="add-admin-button-div .col-3">
                          <Button  className="add-admin-button " onClick={() => addAdmin(admin)}>Submit</Button>
                        </div>
                        <p>{this.state.success}</p>
                    </FormGroup>
                  </Form>
                  
                    {admins.map((admin) => {
                     return  (
                        <Admin admin={admin} 
                        handleDelete={this.submit.bind(this)}
                         />
                        )
                     })
                     }
                 </div>
                 
                )
        }
    }
}


