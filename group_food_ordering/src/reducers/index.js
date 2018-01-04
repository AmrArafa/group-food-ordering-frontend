import {combineReducers} from 'redux';
import adminItems from './Admin/items';
import items from './items';
import cart from './cart';
import groups from './groups';
import users from './users';

const rootReducer = combineReducers({
    items,
    cart,
    groups,
    users,
    adminItems
    

})

export default rootReducer;