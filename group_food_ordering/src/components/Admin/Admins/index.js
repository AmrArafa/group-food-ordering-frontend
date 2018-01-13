import React, { Component } from 'react';
import './index.css';
import  Admin from '../Admin';
import { Button, Form, Input, FormGroup, Col,  Label } from 'reactstrap';
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
        title: 'Delete Admin',                        
        message: 'Are you sure to Delete this Admin?.',               
        confirmLabel: 'Confirm',                          
        cancelLabel: 'Cancel',                            
        onConfirm: () =>(this.props.deleteAdmin(id)),   
        onCancel: () => alert('Delete Canceld'),      
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
        const { admins, loading, error, addAdmin} = this.props;
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


