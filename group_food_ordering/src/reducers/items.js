import {
    GET_ITEMS_LOADING, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE} from '../actions/items';

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null,
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

   	   default:
            return currentState;
   }
}

