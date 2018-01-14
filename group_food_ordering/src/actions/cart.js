export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';


export const addItemToCart = (item) => {
    return {

        type: ADD_ITEM_TO_CART,
        item
    }
}

export const deleteItemFromCart = (item) => {
    return {
      type: DELETE_ITEM_FROM_CART,
      item
    }
}

export const incrementQuantity = (item) => {
  return {
    type: INCREMENT_QUANTITY,
    item
  }
}

export const decrementQuantity = (item) => {
  return {
    type: DECREMENT_QUANTITY,
    item
  }
}