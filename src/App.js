import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
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
import {cable} from './components/Notifications';
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import {userNotifications} from './apiConfig';
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css' 
import './fontawesome-free-5.0.4/web-fonts-with-css/css/fontawesome-all.min.css'
// var Notifications = require('pui-react-notifications').Notifications;
// var NotificationItem = require('pui-react-notifications').NotificationItem;

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        messages: [],
        message: ''
      }
    }

    componentWillMount(){
      if (localStorage.User) {
        const token = localStorage.getItem('jwtToken');
        const loggedInUserIdObject = jwt.decode(token);
        const loggedInUserId = loggedInUserIdObject.user_id;
        const id = loggedInUserId;

        Axios.get(userNotifications(id))
            .then((response) => {
              console.log(response)
                this.setState({ messages: response.data });
                
            })
            .catch(function(error) {
                console.log(error);
            });

      }
        
            cable.subscriptions.create({
            channel: 'NotificationsChannel'
        }, {
            connected: (data) =>{
                console.log('test')
            },  
            received: (data) => {
                this.setState({
                  message: data.message
                })
            }
        })
    }

  render() {
//     const menu = (
//     <Menu>
      
//           <Menu.Item key="0"> 
//             <p>"message"</p>
//           </Menu.Item>
     
//     </Menu>
// );
var menu;
if(this.state.messages.length != 0 ) {
  menu = (
    <Menu>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">{this.state.message}</a>
      </Menu.Item>
    {
      this.state.messages.map((msg) => {
        return <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">{msg.action}</a>
      </Menu.Item>
      })
    }
    </Menu>
  );
} else {
  menu = (
    <Menu>
      <Menu.Item>
      <p> No new notifications</p>
      </Menu.Item>
    </Menu>
  );
}
    if (localStorage.Admin) {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Almakinah Restaurant</h1>
          <nav id="admin-nav">
            <ul>
              <li><Link to="/admin/home">Home</Link></li>
              <li><Link to="/admin/menu">Menu</Link></li>
              <li><Link to="/admin/orders">Order History</Link></li>
              <li><Link to="/admin/users">Users</Link></li>
              <li><Link to="/admin/admins">Admins</Link></li>
            </ul>
          </nav>
          <p id="welcome-admin">Welcome {localStorage.adminName}</p>
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
          <h1 className="App-title">Almakinah Restaurant</h1>
          <nav id="user-nav">
            <ul>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/orderhistory">Check your orders</Link></li>
              <li>{
                  this.state.message == '' && this.state.messages == []?
                      console.log('no notifications')
                  : <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                      <i class="fa fa-bell" aria-hidden="true"></i> <Icon type="down" />
                    </a>
                   </Dropdown>
                 
                }</li>
            </ul>
          </nav>

          <p id="welcome-user">Welcome {localStorage.userName}</p> 
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