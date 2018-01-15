import {
    GET_GROUPS_LOADING, GET_GROUPS_SUCCESS, GET_GROUPS_FAILURE, 
    COPY_ITEMS,
    CREATE_ORDER_LOADING,CREATE_ORDER_SUCCESS,CREATE_ORDER_FAILURE,
    CREATE_SINGLE_ORDER_LOADING,CREATE_SINGLE_ORDER_SUCCESS,CREATE_SINGLE_ORDER_FAILURE,
    CREATE_GROUP_LOADING,CREATE_GROUP_SUCCESS,CREATE_GROUP_FAILURE} from '../actions/groups';

const INITIAL_STATE = {
    groups: [],
    group: '',
    loading: false,
    error: null,
    items: [],
    creating: false,
    errorCreating: null,
    itemsIdsAndQuantity: [],
    order: '',
    cartTotal: 0
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all groups
        case GET_GROUPS_LOADING:
            return {...currentState, loading: true};
        case GET_GROUPS_SUCCESS:
            return {...currentState, loading: false, groups: action.groups};
        case GET_GROUPS_FAILURE:
            return {...currentState, loading: false, error: action.error};

        case COPY_ITEMS:
            return {...currentState, items: action.items, itemsIdsAndQuantity: action.itemsIdsAndQuantity, cartTotal: action.cartTotal};

            // create order
        case CREATE_ORDER_LOADING:
            return {...currentState};
        // case CREATE_ORDER:
        //     return {...currentState, order: action.order};
        case CREATE_ORDER_SUCCESS:
            return {...currentState, order: action.order};
        case CREATE_ORDER_FAILURE:
            return {...currentState};     

                // create single order
        case CREATE_SINGLE_ORDER_LOADING:
            return {...currentState};
        case CREATE_SINGLE_ORDER_SUCCESS:
            return {...currentState, order: action.order};
        case CREATE_SINGLE_ORDER_FAILURE:
            return {...currentState};         

        // Create group
        case CREATE_GROUP_LOADING:
            return {...currentState, creating: true};
        case CREATE_GROUP_SUCCESS:
            return {...currentState, creating: false, groups: [...currentState.groups, action.group], group: action.group};
        case CREATE_GROUP_FAILURE:
            return {...currentState, creating: false, errorCreating: action.error};   

   	   default:
            return currentState;
   }
}