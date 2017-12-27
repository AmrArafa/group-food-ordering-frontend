import Axios from 'axios';


// Get all groups
export const GET_GROUPS_LOADING = 'GET_GROUPS_LOADING';
export const GET_GROUPS = 'GET_GROUPS';
export const GET_GROUPS_SUCCESS = 'GET_GROUPS_SUCCESS';
export const GET_GROUPS_FAILURE = 'GET_GROUPS_FAILURE';

export const COPY_ITEMS = 'COPY_ITEMS';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_ITEMS = 'CREATE_ORDER_ITEMS';


//Get all groups
export const getGroupsLoading = () => {
    return {
        type: GET_GROUPS_LOADING
    }
}
export const getGroups = () => {
    const payload = Axios.get('http://localhost:8888/groups');
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
export const copyItems = (items) => {
    return {
        type: COPY_ITEMS,
        items
    }
}


// create an order
// export const createOrder = (group.id) => {
//     const payload = Axios.post('http://localhost:8888/orders', {
//         paid: false,
//         delivered: false,
//         user_id: 1,
//         group_id : group.id
//     });

//     return {
//         type: CREATE_ORDER,
//         payload.data
//     }
// }

// export const createOrderItems = (items) => {
//     items.forEach((item)=>{
//         const payload = Axios.post('http://localhost:8888/user/id/order/id/order_items', {
//         quantity: item.count,
//         item_id: item.id,
//         order_id: payload.data.id
//     });

//     return {
//         type: CREATE_ORDER_ITEMS,
//         payload
//     }

//     })
    
// }