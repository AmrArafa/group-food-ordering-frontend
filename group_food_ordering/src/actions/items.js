import Axios from 'axios';


// Get all items in menu
export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';


// Add item to cart
// export const ADD_ITEM_LOADING = 'ADD_ITEM_LOADING';
// export const ADD_ITEM = 'ADD_ITEM';
// export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
// export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

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


// Add item to cart
// export const addItemLoading = () => {
//     return {
//         type: ADD_ITEM_LOADING
//     }
// }
// export const addItem = (id) => {
//     const payload = Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     return {
//         type: GET_ITEMS,
//         payload
//     }
// }
// export const addItemSuccess = (item) => {
//     return {
//         type: ADD_ITEM_SUCCESS,
//         item
//     }
// }
// export const addItemFailure = (error) => {
//     return {
//         type: ADD_ITEM_FAILURE,
//         error
//     }
// }