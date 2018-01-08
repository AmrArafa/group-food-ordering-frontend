import {
    GET_ADMINS_LOADING, GET_ADMINS_SUCCESS, GET_ADMINS_FAILURE,
    GET_ADMIN_LOADING, GET_ADMIN_SUCCESS, GET_ADMIN_FAILURE,
    EDIT_ADMIN_LOADING, EDIT_ADMIN_SUCCESS, EDIT_ADMIN_FAILURE,
    DELETE_ADMIN_LOADING, DELETE_ADMIN_SUCCESS, DELETE_ADMIN_FAILURE,
    ADD_ADMIN_LOADING, ADD_ADMIN_SUCCESS, ADD_ADMIN_FAILURE,
    GET_ADMIN_BY_TOKEN_LOADING, GET_ADMIN_BY_TOKEN_SUCCESS, GET_ADMIN_BY_TOKEN_FAILURE

} from '../../actions/Admin/admins';
// ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_FAILURE} from '../actions/admins';


const INITIAL_STATE = {
    admins: [],
    loading: false,
    error: null,
    admin: '',
    success: false,
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all admins
        case GET_ADMINS_LOADING:
            return {...currentState, loading: true};
        case GET_ADMINS_SUCCESS:
            return {...currentState, loading: false, admins: action.admins};
        case GET_ADMINS_FAILURE:
            return {...currentState, loading: false, error: action.error};
        // Get one admin
        case GET_ADMIN_LOADING:
            return {...currentState, loading: true};
        case GET_ADMIN_SUCCESS:
            return {...currentState, admin: action.admin, loading: false};
        case GET_ADMIN_FAILURE:
            return {...currentState, error: action.error, loading: false};
        case GET_ADMIN_BY_TOKEN_LOADING:
            return {...currentState, loading: true};
        case GET_ADMIN_BY_TOKEN_SUCCESS:
            return {...currentState, admin: action.admin, loading: false};
        case GET_ADMIN_BY_TOKEN_FAILURE:
            return {...currentState, error: action.error, loading: false};
        // Add admin 
        case ADD_ADMIN_LOADING:
            return {...currentState, adding: true, success: false};
        case ADD_ADMIN_SUCCESS:
            return {...currentState, adding: false, success: true};
        case ADD_ADMIN_FAILURE:
            return {...currentState, adding: false, errorAdding: action.error ,success: false};
        // Edit single admin
        case EDIT_ADMIN_LOADING:
            var newAdmins = currentState.admins.map(admin => {
                if (admin.id == action.id) admin.loading = true;
                return admin;
            })
            return {...currentState, admins: newAdmins}
        case EDIT_ADMIN_SUCCESS:
            var newAdmins = currentState.admins.map(admin => {
                if (admin.id == action.admin.id) {admin = action.admin}
                return admin;
            })
            return {...currentState, admins: newAdmins}
        case EDIT_ADMIN_FAILURE:
            var newAdmins = currentState.admins.map(admin => {
                if (admin.id == action.id) {admin.loading = false; admin.error = action.error}
                return admin;
            })
            return {...currentState, admins: newAdmins}
        // Delete single admin
        case DELETE_ADMIN_LOADING:
            var newAdmins = currentState.admins.map(admin => {
                if (admin.id == action.id) admin.loading = true;
                return admin;
            })
            return {...currentState, admins: newAdmins}
        case DELETE_ADMIN_SUCCESS:
            var newAdmins = currentState.admins.filter(admin => {
                return admin.id !== action.id
            })
            return {...currentState, admins: newAdmins}
        case DELETE_ADMIN_FAILURE:
            var newAdmins = currentState.admins.map(admin => {
                if (admin.id == action.id) {admin.loading = false; admin.error = action.error}
                return admin;
            })
            return {...currentState, admins: newAdmins}


   	   default:
            return currentState;
   }
}

