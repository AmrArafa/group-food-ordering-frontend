import {combineReducers} from 'redux';
import items from './items';
import cart from './cart';
import groups from './groups';
import users from './users';

const rootReducer = combineReducers({
    items,
    cart,
    groups,
    users
    

})

export default rootReducer;