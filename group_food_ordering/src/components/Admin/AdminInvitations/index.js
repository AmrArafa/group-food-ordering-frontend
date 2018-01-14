import React, { Component } from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css'; 


export default class AdminInvitations extends Component {
  constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            invitation_token: ''
        }
          this._handleChange = this._handleChange.bind(this)          
    }
    componentWillMount(){
       const { getAdminByToken, match: {params: {token}}} = this.props;
       getAdminByToken(token);

    }
     componentWillReceiveProps(nextProps) {
      if (this.props.admin.invitation_token !== nextProps.admin.invitation_token) {
        this.setState({...this.state, 
          first_name: nextProps.admin.first_name,
          last_name: nextProps.admin.last_name,
          email: nextProps.admin.email,
          password: nextProps.admin.password,
          password_confirmation: nextProps.admin.password_confirmation,
          invitation_token: nextProps.admin.invitation_token
        });
      }
    
    }




    _handleChange(e){
       this.setState({...this.state, [e.target.name] :e.target.value})
    }
        
    render(){
          const { editAdmin, admin } = this.props;
          var adminFirstName = this.state.first_name
          var adminLastName = this.state.last_name
          var adminEmail = this.state.email
          var adminPassword =this.state.password
          var adminPassword_confrmation =  this.state.password_confirmation
          var addAdmin = {admin: {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation,
              invitation_token: this.state.invitation_token
            } } 
     return (

      <div className="clearfix">
      <Form id="adminInviteForm">
        <FormGroup>
          <Label for="FirstName">First Name</Label>
          <Input type="email" name="first_name" id="FirstName" placeholder="Enter your First Name" value={adminFirstName} onChange={this._handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="LastName">Last Name</Label>
          <Input type="email" name="last_name" id="LastName"value={adminLastName} onChange={this._handleChange} placeholder="Enter your First Last" />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email"  value={adminEmail} onChange={this._handleChange} id="Email" placeholder="Enter Your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" value={adminPassword} onChange={this._handleChange}  placeholder="password placeholder" />
        </FormGroup>
         <FormGroup>
          <Label for="PasswordConfemation">Password Confrmation</Label>
          <Input type="password" name="password_confirmation" id="PasswordConfemation" value={adminPassword_confrmation} onChange={this._handleChange} placeholder="password confrmation" />
        </FormGroup>
        <div className="admin-invite-button">
          <Link id="invite-button" onClick={() => editAdmin(admin.invitation_token, addAdmin)} to="/admin">Submit</Link>
        </div>
      </Form>

       </div>
       
)
}
}

