import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';
import Cart from './containers/CartContainer';
import AdminPage from './pages/Admin/AdminMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Almakinah Resturant</h1>
        </header>
        <ItemsPage className='items'/>
        <Cart/>

        <div className="App-container">
                    <Route path="/admin/menu" component={AdminPage} />
        </div>
        
    
      </div>
    );
  }
}

export default App;
