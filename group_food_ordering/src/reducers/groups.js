import {
    GET_GROUPS_LOADING, GET_GROUPS_SUCCESS, GET_GROUPS_FAILURE, 
    COPY_ITEMS, 
    CREATE_ORDER, 
    CREATE_GROUP_LOADING,CREATE_GROUP_SUCCESS,CREATE_GROUP_FAILURE} from '../actions/groups';

const INITIAL_STATE = {
    groups: [],
    loading: false,
    error: null,
    items: [],
    creating: false,
    errorCreating: null
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
            return {...currentState, items: action.items};


        case CREATE_ORDER:
            return {...currentState, items: action.items};  

        // Create group
        case CREATE_GROUP_LOADING:
            return {...currentState, creating: true};
        case CREATE_GROUP_SUCCESS:
            return {...currentState, creating: false, groups: [...currentState.groups, action.group]};
        case CREATE_GROUP_FAILURE:
            return {...currentState, creating: false, errorCreating: action.error};   

   	   default:
            return currentState;
   }
}