import {
    ADD_ITEM} from '../actions/cart';

const INITIAL_STATE = {
    items: []
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all items
        case ADD_ITEM:
            return {...currentState, items: [...currentState.items, action.item]};
   	   default:
            return currentState;
   }
}