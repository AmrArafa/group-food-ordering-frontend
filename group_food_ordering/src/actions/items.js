import Axios from 'axios';


// Get all items in menu
export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';


//Get all items
export const getItemsLoading = () => {
    return {
        type: GET_ITEMS_LOADING
    }
}
export const getItems = () => {
    const payload = Axios.get('http://localhost:3000/items');
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