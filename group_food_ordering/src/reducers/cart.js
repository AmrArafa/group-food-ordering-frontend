import {
    ADD_ITEM} from '../actions/cart';
// ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_FAILURE} from '../actions/items';

const INITIAL_STATE = {
    items: []
    // adding: false,
    // errorAdding: null
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all items
        case ADD_ITEM:
            return {...currentState, items: [...currentState.items, action.item]};
        

             // Add item to cart
        // case ADD_ITEM_LOADING:
        //     return {...currentState, adding: true};
        // case ADD_ITEM_SUCCESS:
        //     return {...currentState, adding: false, items: [...currentState.items, action.item]};
        // case ADD_ITEM_FAILURE:
        //     return {...currentState, adding: false, errorAdding: action.error};
   	   default:
            return currentState;
   }
}