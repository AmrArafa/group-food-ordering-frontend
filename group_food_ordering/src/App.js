import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import ItemsPage from './pages/ItemsPage';
import OptionsPage from './pages/OptionsPage';
import OrderPage from './pages/OrderPage';
import AdminPage from './pages/Admin/AdminMenu';
import AdminEditItem from './pages/Admin/AdminEditItem';
import AdminAddItem from './pages/Admin/AdminAddItem';
import Users from './pages/Admin/Users';
import AdminLogIn from './pages/Admin/AdminLogIn';
import logout from './utils/logout';

class App extends Component {
  render() {
    if (localStorage.Admin) {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Restaurant</h1>
        </header>
        <Link to="/admin/menu">AdminMenu</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/" onClick={() => logout()}>Log out</Link>

        <div className="App-container">
          <Switch>
            <Route path="/admin" exact component={AdminLogIn} />
            <Route path="/admin/menu" exact component={AdminPage} />
             <Route path="/admin/users" exact component={Users} />
            <Route path="/admin/menu/edit" component={AdminEditItem} />
            <Route path="/admin/menu/add" component={AdminAddItem} />
          </Switch>
        </div>
       
        <Route path="/options" exact component={OptionsPage} />
        <Route path='/options/order' component={OrderPage}/>            
      </div>
    );

    } if (localStorage.User) {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Resturant</h1>
        </header>
        <Link to="/menu">Menu</Link>
        <Link to="/" onClick={() => logout()}>Log out</Link>
        
        <div className="App-container">
          <Switch>
            <Route path="/" exact component={LogInPage} />
            <Route path="/menu" exact component={ItemsPage} />
            <Route path="/signup" component={SignUpPage} />
          </Switch>
        </div>
       
        <Route path="/options" exact component={OptionsPage} />
        <Route path='/options/order' component={OrderPage}/>            
      </div>
    );

    }

     else {
       return (
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Resturant</h1>
        </header>
         <p>logIn as User <Link to="/">login</Link></p>
         <p>logIn as Admin <Link to="/admin">login</Link></p>
         <div className="App-container">
          <Switch>
            <Route path="/" exact component={LogInPage} />
            <Route path="/admin" exact component={AdminLogIn} />
            <Route path="/signup" exact component={SignUpPage} />
          </Switch>
        </div>
       
      </div>
         )
     }
    
  }
}


export default App;

// <Link to="/menu">Menu</Link>
// <Link to="/admin/menu">AdminMenu</Link>
// <Link to="/" className="logout">Log out</Link>