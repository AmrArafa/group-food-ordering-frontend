import React, {Component} from 'react';
import './index.css'
import { Link, Route } from 'react-router-dom';
import Axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export default class LogIn extends Component{
  constructor(){
    super()
    this.state = {
      email:'',
      password:''
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
    .then(function (response) {
      console.log(response);
      const token = response.data.auth_token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      console.log(jwt.decode(token));
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  render(){
    return(
      <div>
        <h2>Welcome to Almakinah Restaurant!</h2>
        <h3> Please Log in :)</h3>
        <form onSubmit={this._handleSubmit} >
          <div className="sign-up">
            <label>Email:</label>
            <input type="email" name="email" onChange={this._handleChange} />
          </div>
          <div className="sign-up">
            <label>Password:</label>
            <input type="password" name="password" onChange={this._handleChange}/>
          </div>
          <input type="submit" value="Submit"/>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    )
  }
}
