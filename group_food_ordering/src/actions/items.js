import Axios from 'axios';
import { itemsApi, itemApi } from '../apiConfig';


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

//Get all items
export const getItemsLoading = () => {
    return {
        type: GET_ITEMS_LOADING
    }
}
export const getItems = () => {
    const payload = Axios.get(itemsApi);
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
    const payload = Axios.get(itemApi(id));
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

