import {
    SEND_ITEM_TO_EDIT} from '../actions/sendItemToEdit';

const INITIAL_STATE = {
    item: {}
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all items
        case SEND_ITEM_TO_EDIT:
        // debugger;
            return {...currentState, item:action.item};
   	   default:
            return currentState;
   }
}