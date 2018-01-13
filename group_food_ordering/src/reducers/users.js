import {
    GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_FAILURE,
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_FAILURE,
    EDIT_USER_LOADING, EDIT_USER_SUCCESS, EDIT_USER_FAILURE,
    DELETE_USER_LOADING, DELETE_USER_SUCCESS, DELETE_USER_FAILURE,
    ADD_USER_LOADING, ADD_USER_SUCCESS, ADD_USER_FAILURE

} from '../actions/users';


const INITIAL_STATE = {
    users: [],
    loading: false,
    error: null,
    user: ''
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all users
        case GET_USERS_LOADING:
            return {...currentState, loading: true};
        case GET_USERS_SUCCESS:
            return {...currentState, loading: false, users: action.users};
        case GET_USERS_FAILURE:
            return {...currentState, loading: false, error: action.error};
        // Get one user
        case GET_USER_LOADING:
            return {...currentState, loading: true};
        case GET_USER_SUCCESS:
            return {...currentState, user: action.user, loading: false};
        case GET_USER_FAILURE:
            return {...currentState, error: action.error, loading: false};
        // Add user 
        case ADD_USER_LOADING:
            return {...currentState, adding: true};
        case ADD_USER_SUCCESS:
            return {...currentState, adding: false, users: [...currentState.users, action.user]};
        case ADD_USER_FAILURE:
            return {...currentState, adding: false, errorAdding: action.error};
        // Edit single user
        case EDIT_USER_LOADING:
            var newUsers = currentState.users.map(user => {
                if (user.id === action.id) user.loading = true;
                return user;
            })
            return {...currentState, users: newUsers}
        case EDIT_USER_SUCCESS:
            var newUsers = currentState.users.map(user => {
                if (user.id === action.user.id) {user = action.user}
                return user;
            })
            return {...currentState, users: newUsers}
        case EDIT_USER_FAILURE:
            var newUsers = currentState.users.map(user => {
                if (user.id === action.id) {user.loading = false; user.error = action.error}
                return user;
            })
            return {...currentState, users: newUsers}
        // Delete single user
        case DELETE_USER_LOADING:
            var newUsers = currentState.users.map(user => {
                if (user.id === action.id) user.loading = true;
                return user;
            })
            return {...currentState, users: newUsers}
        case DELETE_USER_SUCCESS:
            var newUsers = currentState.users.filter(user => {
                return user.id !== action.id
            })
            return {...currentState, users: newUsers}
        case DELETE_USER_FAILURE:
            var newUsers = currentState.users.map(user => {
                if (user.id === action.id) {user.loading = false; user.error = action.error}
                return user;
            })
            return {...currentState, users: newUsers}


   	   default:
            return currentState;
   }
}

