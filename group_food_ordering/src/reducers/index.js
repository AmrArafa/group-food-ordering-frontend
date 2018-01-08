import {combineReducers} from 'redux';
import adminItems from './Admin/items';
import adminUsers from './Admin/users';
import admins from './Admin/admins';
import items from './items';
import cart from './cart';
import groups from './groups';
import users from './users';

const rootReducer = combineReducers({
    items,
    cart,
    groups,
    users,
    adminItems,
    admins,
    adminUsers
    

})

export default rootReducer;