import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';
import OptionsPage from './pages/OptionsPage';
import AdminPage from './pages/Admin/AdminMenu';
import AdminEditItem from './pages/Admin/AdminEditItem';
import AdminAddItem from './pages/Admin/AdminAddItem';
import Moment from 'react-moment';
Moment.globalFormat = 'YYYY-MMMM-D HH:M:ss';





class App extends Component {
  render() {
    const date = new Date();
        
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Almakinah Resturant</h1>
        </header>
        const = <Moment add={{ minutes: 30 }}>{date}</Moment>

        <Link to="/menu">Menu</Link>
        <Link to="/admin/menu">AdminMenu</Link>

        <div className="App-container">
            <Route path="/admin/menu" exact component={AdminPage} />
             <Route path="/menu" component={ItemsPage} />
             <Route path="/admin/menu/edit" component={AdminEditItem} />
             <Route path="/admin/menu/add" component={AdminAddItem} />
        </div>
       
        
   
    <Route path="/options" component={OptionsPage} />
   


      </div>
    );
  }
}

export default App;
