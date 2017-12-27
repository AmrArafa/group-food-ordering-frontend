import {ADD_ITEM, DELETE_ITEM} from '../actions/cart';

const INITIAL_STATE = {
    items: []
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all items
        case ADD_ITEM:
            if (currentState.items.includes(action.item)){
                return currentState;
            }
            return {...currentState,
                items: [...currentState.items, action.item],
            };
   	    case DELETE_ITEM:
            // let items = currentState.items;
            // console.log("items in reducer");
            // console.log(items);
            // items.splice(items.indexOf(action.item), 1);
            const newItems = currentState.items.filter(a => a !== action.item); 


            return {...currentState, items: newItems};
            //return currentState;
        default:
            return currentState;
   }
}