import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import ItemsPage from './pages/ItemsPage';
import OptionsPage from './pages/OptionsPage';
import AdminPage from './pages/Admin/AdminMenu';
import AdminEditItem from './pages/Admin/AdminEditItem';
import AdminAddItem from './pages/Admin/AdminAddItem';
import Users from './pages/Admin/Users';
import Moment from 'react-moment';
Moment.globalFormat = 'YYYY-MMMM-D HH:M:ss';





class App extends Component {
  render() {
    const date = new Date();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Resturant</h1>
        </header>

        <Link to="/menu">Menu</Link>
        <Link to="/admin/menu">AdminMenu</Link>
        <Link to="/admin/users">Users</Link>
        <LogInPage />
        <div className="App-container">
          <Switch>
            <Route path="/admin/menu" exact component={AdminPage} />

             <Route path="/admin/users" exact component={Users} />
             <Route path="/menu" component={ItemsPage} />
            <Route path="/admin/menu/edit" component={AdminEditItem} />
            <Route path="/admin/menu/add" component={AdminAddItem} />
            <Route path="/signup" component={SignUpPage} />
          </Switch>
        </div>
       
    <Route path="/options" component={OptionsPage} />
   


      </div>
    );
  }
}

export default App;
