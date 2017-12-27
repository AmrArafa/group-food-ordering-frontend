import Axios from 'axios';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';



export const addItemToCart = (item) => {
    return {
        type: ADD_ITEM_TO_CART,
        item
    }
}

