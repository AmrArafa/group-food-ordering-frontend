

import {ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY} from '../actions/cart';


const INITIAL_STATE = {
    items: [],
    quantities: [],
    total: 0
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all items

        case ADD_ITEM_TO_CART:
            const item = currentState.items.find(i => i.id === action.item.id);
            if (item) {
                return currentState;
            } else {
                const newTotal = currentState.total + parseFloat(action.item.price);
                return {...currentState, 
                    items: [...currentState.items, action.item],
                    quantities: [...currentState.quantities, 1],
                    total: newTotal
                };
            }

        case INCREMENT_QUANTITY: {
            const itemIndex = currentState.items.indexOf(action.item);
            const quantities = currentState.quantities.slice(0);
            quantities[itemIndex] = quantities[itemIndex] += 1;
            const newTotal = currentState.total + parseFloat(action.item.price);
            return {
                ...currentState,
                quantities,
                total: newTotal
            }
        }

        case DECREMENT_QUANTITY: {
            const itemIndex = currentState.items.indexOf(action.item);
            const quantities = currentState.quantities.slice(0);
            if (quantities[itemIndex] > 1) {
                quantities[itemIndex] = quantities[itemIndex] -= 1;
                const newTotal = currentState.total - parseFloat(action.item.price);
                return {
                ...currentState,
                quantities,
                total: newTotal
                }
            }else {
                return currentState;
            } 
            
        }

   	    case DELETE_ITEM_FROM_CART:
            const itemIndex = currentState.items.indexOf(action.item);
            const newItems = currentState.items.filter(a => a.id !== action.item.id);
            const newQuantities = currentState.quantities.slice(0);
            const newTotal = currentState.total - (currentState.quantities[itemIndex] * parseFloat(action.item.price));
            newQuantities.splice(itemIndex, 1);
            return {...currentState,
                items: newItems,
                quantities: newQuantities,
                total: newTotal
            };
          
        default:
            return currentState;
   }
}