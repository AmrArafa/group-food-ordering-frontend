import {
    GET_GROUPS_LOADING, GET_GROUPS_SUCCESS, GET_GROUPS_FAILURE, COPY_ITEMS} from '../actions/groups';

const INITIAL_STATE = {
    groups: [],
    loading: false,
    error: null,
    items: [],
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
            return {...currentState, items: [...currentState.items, action.items]};

   	   default:
            return currentState;
   }
}