import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


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
      if (this.props.admin.invitation_token != nextProps.admin.invitation_token) {
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
          // var itemEdit = {
          //   name: this.state.name,
          //   image: this.state.image,
          //   price: this.state.price
          // }
            var addAdmin = {admin: {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation,
              invitation_token: this.state.invitation_token
            } } 
     return (

      <div>
        <form>
          <div className="itemName">
            <label>First name </label>
            <input type="text" name="first_name" value={adminFirstName} onChange={this._handleChange} />
          </div>
           <div className="itemName">
            <label>Last name </label>
            <input type="text" name="last_name" value={adminLastName} onChange={this._handleChange} />
          </div>
           <div className="itemName">
            <label>Email </label>
            <input type="email" name="email" value={adminEmail} onChange={this._handleChange} />
          </div>
           <div className="itemName">
            <label>Password </label>
            <input type="password" name="password" value={adminPassword} onChange={this._handleChange} />
          </div>
          
          <div className="itemName">
            <label>Password Confrmation</label>
            <input type="password" name="password_confirmation" value={adminPassword_confrmation} onChange={this._handleChange} />
          </div>
        </form>


        <Button onClick={() => editAdmin(admin.invitation_token, addAdmin)}><Link to="/admin">Submit</Link></Button>

       </div>
       
)
}
}

