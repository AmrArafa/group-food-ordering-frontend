import {combineReducers} from 'redux';
import items from './items';
import cart from './cart';
import groups from './groups';
import editItem from './EditItem';

const rootReducer = combineReducers({
    items,
    cart,
    groups,
    editItem
    
})

export default rootReducer;