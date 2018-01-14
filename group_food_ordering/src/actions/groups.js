import Axios from 'axios';
import { groups, orders } from '../apiConfig';


// Get all groups
export const GET_GROUPS_LOADING = 'GET_GROUPS_LOADING';
export const GET_GROUPS = 'GET_GROUPS';
export const GET_GROUPS_SUCCESS = 'GET_GROUPS_SUCCESS';
export const GET_GROUPS_FAILURE = 'GET_GROUPS_FAILURE';

export const COPY_ITEMS = 'COPY_ITEMS';

export const CREATE_GROUP_LOADING = 'CREATE_GROUP_LOADING';
export const CREATE_GROUP = 'CREATE_GROUP';
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAILURE = 'CREATE_GROUP_FAILURE';

export const CREATE_ORDER_LOADING = 'CREATE_ORDER_LOADING';
export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';

export const CREATE_SINGLE_ORDER_LOADING = 'CREATE_ORDER_LOADING';
export const CREATE_SINGLE_ORDER = 'CREATE_ORDER';
export const CREATE_SINGLE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_SINGLE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';


//Get all groups
export const getGroupsLoading = () => {
    return {
        type: GET_GROUPS_LOADING
    }
}
export const getGroups = () => {
    const payload = Axios.get(groups);
    return {
        type: GET_GROUPS,
        payload
    }
}
export const getGroupsSuccess = (groups) => {
    return {
        type: GET_GROUPS_SUCCESS,
        groups
    }
}
export const getGroupsFailure = (error) => {
    return {
        type: GET_GROUPS_FAILURE,
        error
    }
}

//copy order items
export const copyItems = (items, itemsIdsAndQuantity, cartTotal) => {
    return {
        type: COPY_ITEMS,
        items,
        itemsIdsAndQuantity,
        cartTotal
    }
}


// Create Group
export const createGroupLoading = () => {
    return {
        type: CREATE_GROUP_LOADING
    }
}
export const createGroup = (timeframe, itemsIdsAndQuantity, loggedInUserId) => {
    const payload = Axios.post(groups, {
        group: {time_frame: timeframe,
        orders_attributes: [{
            user_id: loggedInUserId,
            order_items_attributes: itemsIdsAndQuantity
        }]
    }
    });
    return {
        type: CREATE_GROUP,
        payload
    }
}
export const createGroupSuccess = (group) => {
    return {
        type: CREATE_GROUP_SUCCESS,
        group
    }
}
export const createGroupFailure = (error) => {
    return {
        type: CREATE_GROUP_FAILURE,
        error
    }
}

// create an order

export const createOrderLoading = () => {
    return {
        type: CREATE_ORDER_LOADING
    }
}
export const createOrder = (id, itemsIdsAndQuantity) => {
    const payload = Axios.post(orders, {
        order: {
            group_id : id,
            order_items_attributes: itemsIdsAndQuantity
        }
        
    });
    return {
        type: CREATE_ORDER,
        payload
    }
}
export const createOrderSuccess = (order) => {
    return {
        type: CREATE_ORDER_SUCCESS,
        order
    }
}
export const createOrderFailure = (error) => {
    return {
        type: CREATE_ORDER_FAILURE,
        error
    }
}


// create single order
export const createSingleOrderLoading = () => {
    return {
        type: CREATE_SINGLE_ORDER_LOADING
    }
}
export const createSingleOrder = (itemsIdsAndQuantity) => {
    const payload = Axios.post(orders, {
        order: {
            order_items_attributes: itemsIdsAndQuantity
        }
        
    });
    return {
        type: CREATE_SINGLE_ORDER,
        payload
    }
}
export const createSingleOrderSuccess = (order) => {
    return {
        type: CREATE_SINGLE_ORDER_SUCCESS,
        order
    }
}
export const createSingleOrderFailure = (error) => {
    return {
        type: CREATE_SINGLE_ORDER_FAILURE,
        error
    }
}