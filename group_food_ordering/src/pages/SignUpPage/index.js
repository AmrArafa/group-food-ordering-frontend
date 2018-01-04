import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './index.css'
import Axios from 'axios';

export default class SignUp extends Component{
  constructor(){
    super()
    this.state = {
      email:'',
      firstName:'',
      lastName:'',
      password:'',
      passwordConfirmation:'',
      redirect: false
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e){
    this.setState({...this.state, [e.target.name]: e.target.value});
  }

  _handleSubmit(e){
    e.preventDefault();
    Axios.post('http://localhost:3000/signup.json', { user: {
      email: this.state.email,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation
    }
    })
    .then((response) => {
      console.log('response then',response);
      this.setState({
        ...this.state,
        redirect: true
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    if (this.state.redirect){
      return <Redirect to="/" />
    }
    return(
      <div>
        <h3>Please enter your data :)</h3>
        <form onSubmit={this._handleSubmit} >
          <div className="sign-up">
            <label>Email:</label>
            <input type="email" name="email" onChange={this._handleChange} />
          </div>
          <div className="sign-up">
            <label>First name:</label>
            <input type="text" name="firstName" onChange={this._handleChange} />
          </div>
          <div className="sign-up">
            <label>Last name:</label>
            <input type="text" name="lastName" onChange={this._handleChange} />
          </div>
          <div className="sign-up">
            <label>Password:</label>
            <input type="password" name="password" onChange={this._handleChange}/>
          </div>
          <div className="sign-up">
            <label>Password confirmation:</label>
            <input type="password" name="passwordConfirmation" onChange={this._handleChange}/>
          </div>
          <input type="submit" value="Sign up"/>
        </form>
      </div>
    )
  }
}