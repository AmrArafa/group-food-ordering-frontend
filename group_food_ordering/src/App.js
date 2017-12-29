import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';
import OptionsPage from './pages/OptionsPage';
import Moment from 'react-moment';
Moment.globalFormat = 'YYYY-MMMM-D HH:M:ss';
// import 'moment-timezone';






class App extends Component {
  render() {
    const date = new Date();
        
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Almakinah Resturant</h1>
        </header>
        <Moment add={{ minutes: 30 }}>{date}</Moment>

        <Link to="/menu">Menu</Link>
       
        
    
    <Route path="/menu" component={ItemsPage} />
    <Route path="/options" component={OptionsPage} />
   


      </div>
    );
  }
}

export default App;
