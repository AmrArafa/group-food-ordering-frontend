import {
    GET_ITEMS_LOADING, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE,
    GET_ITEM_LOADING, GET_ITEM_SUCCESS, GET_ITEM_FAILURE,
    EDIT_ITEM_LOADING, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAILURE,
    DELETE_ITEM_LOADING, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE,
    ADD_ITEM_LOADING, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE

} from '../../actions/Admin/items';
// ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_FAILURE} from '../actions/items';


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
        // Add item 
        case ADD_ITEM_LOADING:
            return {...currentState, adding: true};
        case ADD_ITEM_SUCCESS:
            return {...currentState, adding: false, items: [...currentState.items, action.item]};
        case ADD_ITEM_FAILURE:
            return {...currentState, adding: false, errorAdding: action.error};
        // Edit single item
        case EDIT_ITEM_LOADING:
            var newItems = currentState.items.map(item => {
                if (item.id == action.id) item.loading = true;
                return item;
            })
            return {...currentState, items: newItems}
        case EDIT_ITEM_SUCCESS:
            var newItems = currentState.items.map(item => {
                if (item.id == action.item.id) {item = action.item}
                return item;
            })
            return {...currentState, items: newItems}
        case EDIT_ITEM_FAILURE:
            var newItems = currentState.items.map(item => {
                if (item.id == action.id) {item.loading = false; item.error = action.error}
                return item;
            })
            return {...currentState, items: newItems}
        // Delete single item
        case DELETE_ITEM_LOADING:
            var newItems = currentState.items.map(item => {
                if (item.id == action.id) item.loading = true;
                return item;
            })
            return {...currentState, items: newItems}
        case DELETE_ITEM_SUCCESS:
            var newItems = currentState.items.filter(item => {
                return item.id !== action.id
            })
            return {...currentState, items: newItems}
        case DELETE_ITEM_FAILURE:
            var newItems = currentState.items.map(item => {
                if (item.id == action.id) {item.loading = false; item.error = action.error}
                return item;
            })
            return {...currentState, items: newItems}


   	   default:
            return currentState;
   }
}

