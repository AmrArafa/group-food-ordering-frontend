import {
    GET_MOST_ITEM_LOADING, GET_MOST_ITEM_SUCCESS, GET_MOST_ITEM_FAILURE,
GET_LESS_ITEM_LOADING, GET_LESS_ITEM_SUCCESS, GET_LESS_ITEM_FAILURE,
GET_MOST_USER_LOADING, GET_MOST_USER_SUCCESS, GET_MOST_USER_FAILURE,
GET_LESS_USER_LOADING, GET_LESS_USER_SUCCESS, GET_LESS_USER_FAILURE,
GET_TOTAL_SOLD_LOADING, GET_TOTAL_SOLD_SUCCESS, GET_TOTAL_SOLD_FAILURE,
GET_TOTAL_SOLD_LAST_MONTH_LOADING, GET_TOTAL_SOLD_LAST_MONTH_SUCCESS, GET_TOTAL_SOLD_LAST_MONTH_FAILURE,
GET_TOTAL_SOLD_LAST_DAY_LOADING, GET_TOTAL_SOLD_LAST_DAY_SUCCESS, GET_TOTAL_SOLD_LAST_DAY_FAILURE,
GET_TOTAL_SOLD_LAST_HOUR_LOADING, GET_TOTAL_SOLD_LAST_HOUR_SUCCESS, GET_TOTAL_SOLD_LAST_HOUR_FAILURE

} from '../../actions/Admin/dashBoard';

const INITIAL_STATE = {
    mostItem: null,
    lessItem: null,
    mostUser: null,
    lessUser: null,
    totalSold: null,
    totalSoldLastMonth: null,
    totalSoldLastDay: null,
    totalSoldLastHour:null,
    loadingMostItem: false,
    loadingLessItem: false,
    loadingMostUser: false,
    loadinglessUser: false,
    loadingTotalSold: false,
    loadingTotalMonth: false,
    loadingTotalDay: false,
    loadingTotalHour: false,
    error: null
    
}


export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        // Get Most Item
        case GET_MOST_ITEM_LOADING:
            return {...currentState, loadingMostItem: true};
        case GET_MOST_ITEM_SUCCESS:
            return {...currentState, loadingMostItem: false, mostItem: action.item};
        case GET_MOST_ITEM_FAILURE:
            return {...currentState, loadingMostItem: false, error: action.error};
        // Get less Item
        case GET_LESS_ITEM_LOADING:
            return {...currentState, loadingLessItem: true};
        case GET_LESS_ITEM_SUCCESS:
            return {...currentState, loadingLessItem: false, lessItem: action.item};
        case GET_LESS_ITEM_FAILURE:
            return {...currentState, loadingLessItem: false, error: action.error};
        // Get Most User
        case GET_MOST_USER_LOADING:
            return {...currentState, loadingMostUser: true};
        case GET_MOST_USER_SUCCESS:
            return {...currentState, loadingMostUser: false, mostUser: action.user};
        case GET_MOST_USER_FAILURE:
            return {...currentState, loadingMostUser: false, error: action.error};
        // Get less User
        case GET_LESS_USER_LOADING:
            return {...currentState, loadingLessUser: true};
        case GET_LESS_USER_SUCCESS:
            return {...currentState, loadingLessUser: false, lessUser: action.user};
        case GET_LESS_USER_FAILURE:
            return {...currentState, loadingLessUser: false, error: action.error};
        // Get Total Sold
        case GET_TOTAL_SOLD_LOADING:
            return {...currentState, loadingTotalSold: true};
        case GET_TOTAL_SOLD_SUCCESS:
            return {...currentState, loadingTotalSold: false, totalSold: action.total};
        case GET_TOTAL_SOLD_FAILURE:
            return {...currentState, loadingTotalSold: false, error: action.error};
        // Get Total Sold Last Month
        case GET_TOTAL_SOLD_LAST_MONTH_LOADING:
            return {...currentState, loadingTotalMonth: true};
        case GET_TOTAL_SOLD_LAST_MONTH_SUCCESS:
            return {...currentState, loadingTotalMonth: false, totalSoldLastMonth: action.total};
        case GET_TOTAL_SOLD_LAST_MONTH_FAILURE:
            return {...currentState, loadingTotalMonth: false, error: action.error};
        // Get Total Sold Last Day
        case GET_TOTAL_SOLD_LAST_DAY_LOADING:
            return {...currentState, loadingTotalDay: true};
        case GET_TOTAL_SOLD_LAST_DAY_SUCCESS:
            return {...currentState, loadingTotalDay: false, totalSoldLastDay: action.total};
        case GET_TOTAL_SOLD_LAST_DAY_FAILURE:
            return {...currentState, loadingTotalDay: false, error: action.error};
        // Get Total Sold Last Hours
        case GET_TOTAL_SOLD_LAST_HOUR_LOADING:
            return {...currentState, loadingTotalHour: true};
        case GET_TOTAL_SOLD_LAST_HOUR_SUCCESS:
            return {...currentState, loadingTotalHour: false, totalSoldLastHour: action.total};
        case GET_TOTAL_SOLD_LAST_HOUR_FAILURE:
            return {...currentState, loadingTotalHour: false, error: action.error};
                 
   	   default:
            return currentState;
   }
}

