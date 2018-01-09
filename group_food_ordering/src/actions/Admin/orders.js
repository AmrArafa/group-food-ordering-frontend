import Axios from 'axios';
import { AdminOrders, AdminOrder } from '../../apiConfig';

// Get Orders
export const GET_ORDERS_LOADING = 'GET_ORDERS_LOADING';
export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';
// Get one Order
export const GET_ORDER_LOADING = 'GET_ORDER_LOADING';
export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILURE = 'GET_ORDER_FAILURE';

// Edit single order
export const EDIT_ORDER_LOADING = 'EDIT_ORDER_LOADING';
export const EDIT_ORDER = 'EDIT_ORDER';
export const EDIT_ORDER_SUCCESS = 'EDIT_ORDER_SUCCESS';
export const EDIT_ORDER_FAILURE = 'EDIT_ORDER_FAILURE';

//Get all orders
export const getOrdersLoading = () => {
    return {
        type: GET_ORDERS_LOADING
    }
}
export const getOrders = () => {
    const payload = Axios.get(AdminOrders);
    return {
        type: GET_ORDERS,
        payload
    }
}
export const getOrdersSuccess = (orders) => {
    return {
        type: GET_ORDERS_SUCCESS,
        orders
    }
}
export const getOrdersFailure = (error) => {
    return {
        type: GET_ORDERS_FAILURE,
        error
    }
}

//Get order details
export const getOrderLoading = () => {
    return {
        type: GET_ORDER_LOADING
    }
}
export const getOrder = (id) => {
    const payload = Axios.get(AdminOrder(id));
    return {
        type: GET_ORDER,
        payload
    }
}
export const getOrderSuccess = (order) => {
    return {
        type: GET_ORDER_SUCCESS,
        order
    }
}
export const getOrderFailure = (error) => {
    return {
        type: GET_ORDER_FAILURE,
        error
    }
}


// Edit single order
export const editOrderLoading = (id) => {
    return {
        type: EDIT_ORDER_LOADING,
        id
    }
}
export const editOrder = (id, order) => {
    const payload = Axios.patch(AdminOrder(id), order);
    return {
        type: EDIT_ORDER,
        payload
    }
}
export const editOrderSuccess = (order) => {
    return {
        type: EDIT_ORDER_SUCCESS,
        order
    }
}
export const editOrderFailure = (error) => {
    return {
        type: EDIT_ORDER_FAILURE,
        error
    }
}