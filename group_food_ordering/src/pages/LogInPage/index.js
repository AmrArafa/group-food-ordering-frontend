import React, {Component} from 'react';
import './index.css'
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export default class LogIn extends Component{
  constructor(){
    super()
    this.state = {
      email:'',
      password:'',
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
    Axios.post('http://localhost:3000/login.json', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      console.log(response);
      const token = response.data.auth_token;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('User', true);
      setAuthorizationToken(token);
      console.log(jwt.decode(token));
      this.setState({
        ...this.state,
        redirect: true
      });
    })
    .catch(function (error) {
      alert(error.response.data.message);
      console.log(error.response.data);
    });
  }



  render(){
    if (this.state.redirect){
      return <Redirect to="/menu" />
    }
    return(
      <div className="login-page clearfix">
        <div className="welcome-msg">
          <p>Welcome to Almakinah Restaurant!</p>
          <p> Please log in &#9786;</p>
        </div>
        <div className="login-form">
          <form onSubmit={this._handleSubmit} >
            <div className="email">
              <label>Email</label>
              <input className="field" type="email" name="email" onChange={this._handleChange} />
            </div>
            <div className="password">
              <label>Password</label>
              <input className="field" type="password" name="password" onChange={this._handleChange}/>
            </div>
            <input id="login-button" type="submit" value="Log in"/>
          </form>
          <p>Don't have an account?</p>
          <Link id="signup-link" to="/signup">Sign up</Link>
        </div>
      </div>
    )
  }
}
