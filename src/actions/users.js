import Axios from 'axios';
import { usersApi, userApi } from '../apiConfig';


// Get all users in menu
export const GET_USERS_LOADING = 'GET_USERS_LOADING';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
// Get one user
export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

// Edit single user
export const EDIT_USER_LOADING = 'EDIT_USER_LOADING';
export const EDIT_USER = 'EDIT_USER';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';

// Delete single user
export const DELETE_USER_LOADING = 'DELETE_USER_LOADING';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

// Add user
export const ADD_USER_LOADING = 'ADD_USER_LOADING';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

//Get all users
export const getUsersLoading = () => {
    return {
        type: GET_USERS_LOADING
    }
}
export const getUsers = () => {
    const payload = Axios.get(usersApi);
    return {
        type: GET_USERS,
        payload
    }
}
export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        users
    }
}
export const getUsersFailure = (error) => {
    return {
        type: GET_USERS_FAILURE,
        error
    }
}

//Get user details
export const getUserLoading = () => {
    return {
        type: GET_USER_LOADING
    }
}
export const getUser = (id) => {
    const payload = Axios.get(userApi(id));
    return {
        type: GET_USER,
        payload
    }
}
export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        user
    }
}
export const getUserFailure = (error) => {
    return {
        type: GET_USER_FAILURE,
        error
    }
}

// Add user to cart
export const addUserLoading = () => {
    return {
        type: ADD_USER_LOADING
    }
}
export const addUser = (user) => {
    const payload = Axios.post(usersApi, 
        user
    );
    return {
        type: ADD_USER,
        payload
    }
}
export const addUserSuccess = (User) => {
    return {
        type: ADD_USER_SUCCESS,
        User
    }
}
export const addUserFailure = (error) => {
    return {
        type: ADD_USER_FAILURE,
        error
    }
}

// Edit single user
export const editUserLoading = (id) => {
    return {
        type: EDIT_USER_LOADING,
        id
    }
}
export const editUser = (id, user) => {
    const payload = Axios.patch(userApi(id), user);
    return {
        type: EDIT_USER,
        payload
    }
}
export const editUserSuccess = (user) => {
    return {
        type: EDIT_USER_SUCCESS,
        user
    }
}
export const editUserFailure = (error) => {
    return {
        type: EDIT_USER_FAILURE,
        error
    }
}

// Delete single user
export const deleteUserLoading = (id) => {
    return {
        type: DELETE_USER_LOADING,
        id
    }
}
export const deleteUser = (id) => {
    const payload = Axios.delete(userApi(id));
    return {
        type: DELETE_USER,
        payload
    }
}
export const deleteUserSuccess = (id) => {
    return {
        type: DELETE_USER_SUCCESS,
        id
    }
}
export const deleteUserFailure = (id) => {
    return {
        type: DELETE_USER_FAILURE,
        id
    }
}
