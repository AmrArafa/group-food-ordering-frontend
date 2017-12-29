import {combineReducers} from 'redux';
import items from './items';
import cart from './cart';
import groups from './groups';

const rootReducer = combineReducers({
    items,
    cart,
    groups
})

export default rootReducer;