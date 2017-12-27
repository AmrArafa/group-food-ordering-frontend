import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Almakinah Resturant</h1>
        </header>
        <Link to="/menu">Menu</Link>
       
        
    
    <Route path="/menu" component={ItemsPage} />
   

      </div>
    );
  }
}

export default App;
