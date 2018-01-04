import Axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { AdminitemsApi, AdminitemApi } from '../../apiConfig';


// Get all items in menu
export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
// Get one Item
export const GET_ITEM_LOADING = 'GET_ITEM_LOADING';
export const GET_ITEM = 'GET_ITEM';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

// Edit single item
export const EDIT_ITEM_LOADING = 'EDIT_ITEM_LOADING';
export const EDIT_ITEM = 'EDIT_ITEM';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

// Delete single item
export const DELETE_ITEM_LOADING = 'DELETE_ITEM_LOADING';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

// Add item
export const ADD_ITEM_LOADING = 'ADD_ITEM_LOADING';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

//Get all items
export const getItemsLoading = () => {
    return {
        type: GET_ITEMS_LOADING
    }
}
export const getItems = () => {
    const payload = Axios.get(AdminitemsApi);
    return {
        type: GET_ITEMS,
        payload
    }
}
export const getItemsSuccess = (items) => {
    return {
        type: GET_ITEMS_SUCCESS,
        items
    }
}
export const getItemsFailure = (error) => {
    return {
        type: GET_ITEMS_FAILURE,
        error
    }
}

//Get item details
export const getItemLoading = () => {
    return {
        type: GET_ITEM_LOADING
    }
}
export const getItem = (id) => {
    const payload = Axios.get(AdminitemApi(id));
    return {
        type: GET_ITEM,
        payload
    }
}
export const getItemSuccess = (item) => {
    return {
        type: GET_ITEM_SUCCESS,
        item
    }
}
export const getItemFailure = (error) => {
    return {
        type: GET_ITEM_FAILURE,
        error
    }
}

// Add item to cart
export const addItemLoading = () => {
    return {
        type: ADD_ITEM_LOADING
    }
}
export const addItem = (item) => {
    const payload = Axios.post(AdminitemsApi, 
        item
    );
    return {
        type: ADD_ITEM,
        payload
    }
}
export const addItemSuccess = (item) => {
    return {
        type: ADD_ITEM_SUCCESS,
        item
    }
}
export const addItemFailure = (error) => {
    return {
        type: ADD_ITEM_FAILURE,
        error
    }
}

// Edit single item
export const editItemLoading = (id) => {
    return {
        type: EDIT_ITEM_LOADING,
        id
    }
}
export const editItem = (id, item) => {
    const payload = Axios.patch(AdminitemApi(id), item);
    return {
        type: EDIT_ITEM,
        payload
    }
}
export const editItemSuccess = (item) => {
    return {
        type: EDIT_ITEM_SUCCESS,
        item
    }
}
export const editItemFailure = (error) => {
    return {
        type: EDIT_ITEM_FAILURE,
        error
    }
}

// Delete single item
export const deleteItemLoading = (id) => {
    return {
        type: DELETE_ITEM_LOADING,
        id
    }
}
export const deleteItem = (id) => {
    const payload = Axios.delete(AdminitemApi(id));
    return {
        type: DELETE_ITEM,
        payload
    }
}
export const deleteItemSuccess = (id) => {
    return {
        type: DELETE_ITEM_SUCCESS,
        id
    }
}
export const deleteItemFailure = (id) => {
    return {
        type: DELETE_ITEM_FAILURE,
        id
    }
}
