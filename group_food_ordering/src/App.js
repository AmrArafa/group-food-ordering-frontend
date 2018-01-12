import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import ItemsPage from './pages/ItemsPage';
import OptionsPage from './pages/OptionsPage';
import OrderPage from './pages/OrderPage';
import OrderHistory from './components/OrderHistory';
import NewGroupPage from './pages/NewGroupPage';
import JoinGroupPage from './components/JoinGroup';
import AdminPage from './pages/Admin/AdminMenu';
import AdminEditItem from './pages/Admin/AdminEditItem';
import AdminAddItem from './pages/Admin/AdminAddItem';
import Users from './pages/Admin/Users';
import Admins from './pages/Admin/Admins';
import AdminLogIn from './pages/Admin/AdminLogIn';
import logout from './utils/logout';
import AdminRegistration from './pages/Admin/AdminRegistration';
import AdminHome from './pages/Admin/Home'
import AdminOrderHistory from './pages/Admin/AdminOrderHistory'


class App extends Component {
  render() {
    if (localStorage.Admin) {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Restaurant</h1>
          <nav>
            <ul>
              <li><Link to="/admin/home">Home</Link></li>
              <li><Link to="/admin/menu">Menu</Link></li>
              <li><Link to="/admin/orders">Order History</Link></li>
              <li><Link to="/admin/users">Users</Link></li>
              <li><Link to="/admin/admins">Admins</Link></li>
            </ul>
          </nav>
          <Link className="logout" to="/" onClick={() => logout()}>Log out</Link>
        </header>
        <div className="App-container">
          <Switch>
            <Route path="/admin" exact component={AdminLogIn} />
            <Route path="/admin/home" component={AdminHome} />
            <Route path="/admin/menu" exact component={AdminPage} />
            <Route path="/admin/users" exact component={Users} />
            <Route path="/admin/admins" exact component={Admins} />
            <Route path="/admin/menu/edit" component={AdminEditItem} />
            <Route path="/admin/menu/add" component={AdminAddItem} />
            <Route path="/admin/orders" component={AdminOrderHistory} />
          </Switch>
        </div>
        <Route path="/options" exact component={OptionsPage} />
        <Route path='/options/order' component={OrderPage}/>
        <footer>
          <div className="footer clearfix">
            <p>&copy; Almakinah Restaurant</p>
            <div id="footer-p">
              <p><a href="#">Terms of Use</a></p>
              <p><a href="#">Privacy Policy</a></p>
            </div>
          </div>
        </footer>
      </div>
    );

    } if (localStorage.User) {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Resturant</h1>
          <nav>
            <ul>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/orderhistory">Check your orders</Link></li>
            </ul>
          </nav>
          <Link className="logout" to="/" onClick={() => logout()}>Log out</Link>
        </header>
        
        <div className="App-container">
          <Switch>
            <Route path="/" exact component={LogInPage} />
            <Route path="/menu" exact component={ItemsPage} />
            <Route path="/signup" component={SignUpPage} />
          </Switch>
        </div>
        <Route path='/orderhistory' component={OrderHistory}/> 
        <Route path="/options" exact component={OptionsPage} />
        <Route path='/options/order' component={OrderPage}/> 
        <Route path='/options/newgroup' component={NewGroupPage}/> 
        <Route path='/options/joingroup/:id' component={JoinGroupPage}/>
        <footer>
          <div className="footer clearfix">
            <p>&copy; Almakinah Restaurant</p>
            <div id="footer-p">
              <p><a href="#">Terms of Use</a></p>
              <p><a href="#">Privacy Policy</a></p>
            </div>
          </div>
        </footer>
      </div>
    );

    }

     else {
       return (
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Resturant</h1>
        </header>
         <div className="App-container">
          <Switch>
            <Route path="/" exact component={LogInPage} />
            <Route path="/admin" exact component={AdminLogIn} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/invitations" component={AdminRegistration} />
          </Switch>
        </div>
        <footer>
          <div className="footer clearfix">
            <p>&copy; Almakinah Restaurant</p>
            <div id="footer-p">
              <p><a href="#">Terms of Use</a></p>
              <p><a href="#">Privacy Policy</a></p>
            </div>
          </div>
        </footer>
        </div>
         )
     }
    
  }
}


export default App;

// <Link to="/menu">Menu</Link>
// <Link to="/admin/menu">AdminMenu</Link>
// <Link to="/" className="logout">Log out</Link>