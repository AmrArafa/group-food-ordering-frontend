import {
    GET_ITEMS_LOADING, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE} from '../actions/items';
// ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_FAILURE} from '../actions/items';

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null,
    // adding: false,
    // errorAdding: null
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all items
        case GET_ITEMS_LOADING:
            return {...currentState, loading: true};
        case GET_ITEMS_SUCCESS:
            return {...currentState, loading: false, items: action.items};
        case GET_ITEMS_FAILURE:
            return {...currentState, loading: false, error: action.error};

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

