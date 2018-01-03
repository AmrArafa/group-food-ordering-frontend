import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter, Route, Switch, Link } from 'react-router-dom';
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import ItemsPage from './pages/ItemsPage';
import OptionsPage from './pages/OptionsPage';
import AdminPage from './pages/Admin/AdminMenu';
import AdminEditItem from './pages/Admin/AdminEditItem';
import AdminAddItem from './pages/Admin/AdminAddItem';
// import Moment from 'react-moment';
// Moment.globalFormat = 'YYYY-MMMM-D HH:M:ss';

class App extends Component {
  render() {
    // const date = new Date();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Resturant</h1>
        </header>

        <div className="App-container">
          <Switch>
            <Route path="/" exact component={LogInPage} />
            <Route path="/menu" exact component={ItemsPage} />
            <Route path="/admin/menu" exact component={AdminPage} />
            <Route path="/admin/menu/edit" exact component={AdminEditItem} />
            <Route path="/admin/menu/add" exact component={AdminAddItem} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/options" exact component={OptionsPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// <Link to="/menu">Menu</Link>
// <Link to="/admin/menu">AdminMenu</Link>
// <Link to="/" className="logout">Log out</Link>