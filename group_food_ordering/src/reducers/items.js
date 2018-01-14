import {
    GET_ITEMS_LOADING, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE,
    GET_ITEM_LOADING, GET_ITEM_SUCCESS, GET_ITEM_FAILURE

} from '../actions/items';

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null,
    item: ''
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
        // Get one item
        case GET_ITEM_LOADING:
            return {...currentState, loading: true};
        case GET_ITEM_SUCCESS:
            return {...currentState, item: action.item, loading: false};
        case GET_ITEM_FAILURE:
            return {...currentState, error: action.error, loading: false};
        default:
            return currentState;
   }
}

