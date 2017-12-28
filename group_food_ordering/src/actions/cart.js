import Axios from 'axios';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const DELETE_ITEM = 'DELETE_ITEM'




export const addItemToCart = (item) => {
    return {

        type: ADD_ITEM_TO_CART,
        item
    }
}

export const deleteItem = (item) => {
    return {
      type: DELETE_ITEM,
      item
    }
}

