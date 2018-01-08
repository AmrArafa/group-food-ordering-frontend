import Axios from 'axios';
import { adminsApi, adminApi, adminInvitations, getAdminInvitaions, adddAdmin } from '../../apiConfig';


// Get all admins in menu
export const GET_ADMINS_LOADING = 'GET_ADMINS_LOADING';
export const GET_ADMINS = 'GET_ADMINS';
export const GET_ADMINS_SUCCESS = 'GET_ADMINS_SUCCESS';
export const GET_ADMINS_FAILURE = 'GET_ADMINS_FAILURE';
// Get one admin
export const GET_ADMIN_LOADING = 'GET_ADMIN_LOADING';
export const GET_ADMIN = 'GET_ADMIN';
export const GET_ADMIN_SUCCESS = 'GET_ADMIN_SUCCESS';
export const GET_ADMIN_FAILURE = 'GET_ADMIN_FAILURE';

export const GET_ADMIN_BY_TOKEN_LOADING = 'GET_ADMIN_BY_TOKEN_LOADING';
export const GET_ADMIN_BY_TOKEN = 'GET_ADMIN_BY_TOKEN';
export const GET_ADMIN_BY_TOKEN_SUCCESS = 'GET_ADMIN_BY_TOKEN_SUCCESS';
export const GET_ADMIN_BY_TOKEN_FAILURE = 'GET_ADMIN_BY_TOKEN_FAILURE';

// Edit single admin
export const EDIT_ADMIN_LOADING = 'EDIT_ADMIN_LOADING';
export const EDIT_ADMIN = 'EDIT_ADMIN';
export const EDIT_ADMIN_SUCCESS = 'EDIT_ADMIN_SUCCESS';
export const EDIT_ADMIN_FAILURE = 'EDIT_ADMIN_FAILURE';

// Delete single admin
export const DELETE_ADMIN_LOADING = 'DELETE_ADMIN_LOADING';
export const DELETE_ADMIN = 'DELETE_ADMIN';
export const DELETE_ADMIN_SUCCESS = 'DELETE_ADMIN_SUCCESS';
export const DELETE_ADMIN_FAILURE = 'DELETE_ADMIN_FAILURE';

// Add admin
export const ADD_ADMIN_LOADING = 'ADD_ADMIN_LOADING';
export const ADD_ADMIN = 'ADD_ADMIN';
export const ADD_ADMIN_SUCCESS = 'ADD_ADMIN_SUCCESS';
export const ADD_ADMIN_FAILURE = 'ADD_ADMIN_FAILURE';

//Get all admins
export const getAdminsLoading = () => {
    return {
        type: GET_ADMINS_LOADING
    }
}
export const getAdmins = () => {
    const payload = Axios.get(adminsApi);
    return {
        type: GET_ADMINS,
        payload
    }
}
export const getAdminsSuccess = (admins) => {
    return {
        type: GET_ADMINS_SUCCESS,
        admins
    }
}
export const getAdminsFailure = (error) => {
    return {
        type: GET_ADMINS_FAILURE,
        error
    }
}

//Get admin details
export const getAdminLoading = () => {
    return {
        type: GET_ADMIN_LOADING
    }
}
export const getAdmin = (id) => {
    const payload = Axios.get(adminApi(id));
    return {
        type: GET_ADMIN,
        payload
    }
}
export const getAdminSuccess = (admin) => {
    return {
        type: GET_ADMIN_SUCCESS,
        admin
    }
}
export const getAdminFailure = (error) => {
    return {
        type: GET_ADMIN_FAILURE,
        error
    }
}

export const getAdminByTokenLoading = () => {
    return {
        type: GET_ADMIN_BY_TOKEN_LOADING
    }
}
export const getAdminByToken = (token) => {
    const payload = Axios.get(getAdminInvitaions(token));
    return {
        type: GET_ADMIN_BY_TOKEN,
        payload
    }
}
export const getAdminByTokenSuccess = (admin) => {
    return {
        type: GET_ADMIN_BY_TOKEN_SUCCESS,
        admin
    }
}
export const getAdminByTokenFailure = (error) => {
    return {
        type: GET_ADMIN_BY_TOKEN_FAILURE,
        error
    }
}
// Add admin to cart
export const addAdminLoading = () => {
    return {
        type: ADD_ADMIN_LOADING
    }
}
export const addAdmin = (admin) => {
    const payload = Axios.post(adminInvitations, 
        admin
    );
    return {
        type: ADD_ADMIN,
        payload
    }
}
export const addAdminSuccess = (Admin) => {
    return {
        type: ADD_ADMIN_SUCCESS,
        Admin
    }
}
export const addAdminFailure = (error) => {
    return {
        type: ADD_ADMIN_FAILURE,
        error
    }
}

// Edit single admin
export const editAdminLoading = (id) => {
    return {
        type: EDIT_ADMIN_LOADING,
        id
    }
}
export const editAdmin = (token, admin) => {
    const payload = Axios.post(adddAdmin(token), admin);
    console.log('aaaaaaaaaaaaaaaaaaaaa', admin)
    return {
        type: EDIT_ADMIN,
        payload
    }
}
export const editAdminSuccess = (admin) => {
    return {
        type: EDIT_ADMIN_SUCCESS,
        admin
    }
}
export const editAdminFailure = (error) => {
    return {
        type: EDIT_ADMIN_FAILURE,
        error
    }
}

// Delete single admin
export const deleteAdminLoading = (id) => {
    return {
        type: DELETE_ADMIN_LOADING,
        id
    }
}
export const deleteAdmin = (id) => {
    const payload = Axios.delete(adminApi(id));
    return {
        type: DELETE_ADMIN,
        payload
    }
}
export const deleteAdminSuccess = (id) => {
    return {
        type: DELETE_ADMIN_SUCCESS,
        id
    }
}
export const deleteAdminFailure = (id) => {
    return {
        type: DELETE_ADMIN_FAILURE,
        id
    }
}
