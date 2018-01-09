import {combineReducers} from 'redux';
import adminItems from './Admin/items';
import adminUsers from './Admin/users';
import admins from './Admin/admins';
import items from './items';
import cart from './cart';
import groups from './groups';
import users from './users';
import AdminDashBoard from './Admin/dashBoard'
import AdminOrders from './Admin/orders'

const rootReducer = combineReducers({
    items,
    cart,
    groups,
    users,
    adminItems,
    admins,
    adminUsers,
    AdminDashBoard,
    AdminOrders
})

export default rootReducer;