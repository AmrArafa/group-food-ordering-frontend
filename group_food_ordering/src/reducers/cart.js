

import {ADD_ITEM_TO_CART, DELETE_ITEM} from '../actions/cart';


const INITIAL_STATE = {
    items: []
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all items

        case ADD_ITEM_TO_CART:
            if (currentState.items.includes(action.item)){
                return currentState;
            } else{
                return {...currentState, items: [...currentState.items, action.item]};
            }

        // case ADD_ITEM:
        //     if (currentState.items.includes(action.item)){
        //         return currentState;
        //     }
        //     return {...currentState,
        //         items: [...currentState.items, action.item],
        //     };
   	    case DELETE_ITEM:

            const newItems = currentState.items.filter(a => a !== action.item);
            return {...currentState, items: newItems};
          
        default:
            return currentState;
   }
}