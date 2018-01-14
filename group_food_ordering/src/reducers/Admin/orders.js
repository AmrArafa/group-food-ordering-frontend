import {
    GET_ORDERS_LOADING, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE,
    GET_ORDER_LOADING, GET_ORDER_SUCCESS, GET_ORDER_FAILURE,
    EDIT_ORDER_LOADING, EDIT_ORDER_SUCCESS, EDIT_ORDER_FAILURE,

} from '../../actions/Admin/orders';

const INITIAL_STATE = {
    orders: [],
    loading: false,
    error: null,
    order: ''
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get all orders
        case GET_ORDERS_LOADING:
            return {...currentState, loading: true};
        case GET_ORDERS_SUCCESS:
            return {...currentState, loading: false, orders: action.orders};
        case GET_ORDERS_FAILURE:
            return {...currentState, loading: false, error: action.error};
        // Get one order
        case GET_ORDER_LOADING:
            return {...currentState, loading: true};
        case GET_ORDER_SUCCESS:
            return {...currentState, order: action.order, loading: false};
        case GET_ORDER_FAILURE:
            return {...currentState, error: action.error, loading: false};
             // Edit single order
        case EDIT_ORDER_LOADING:
            var newOrders = currentState.orders.map(order => {
                if (order.id === action.id) order.loading = true;
                return order;
            })
            return {...currentState, orders: newOrders}
        case EDIT_ORDER_SUCCESS:
            var newOrders = currentState.orders.map(order => {
                if (order.id === action.order.id) {order = action.order}
                return order;
            })
            return {...currentState, orders: newOrders}
        case EDIT_ORDER_FAILURE:
            var newOrders = currentState.orders.map(order => {
                if (order.id === action.id) {order.loading = false; order.error = action.error}
                return order;
            })
            return {...currentState, orders: newOrders}
       


   	   default:
            return currentState;
   }
}

