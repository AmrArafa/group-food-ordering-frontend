import Axios from 'axios';
import { mostItem, lessItem, mostUser, lessUser, totalSold,
 totalSoldLastMonth, totalSoldLastDay, totalSoldLastHour } from '../../apiConfig';

export const GET_MOST_ITEM_LOADING = 'GET_MOST_ITEM_LOADING';
export const GET_MOST_ITEM = 'GET_MOST_ITEM';
export const GET_MOST_ITEM_SUCCESS = 'GET_MOST_ITEM_SUCCESS';
export const GET_MOST_ITEM_FAILURE = 'GET_MOST_ITEM_FAILURE';

export const GET_LESS_ITEM_LOADING = 'GET_LESS_ITEM_LOADING';
export const GET_LESS_ITEM = 'GET_LESS_ITEM';
export const GET_LESS_ITEM_SUCCESS = 'GET_LESS_ITEM_SUCCESS';
export const GET_LESS_ITEM_FAILURE = 'GET_LESS_ITEM_FAILURE';

export const GET_MOST_USER_LOADING = 'GET_MOST_USER_LOADING';
export const GET_MOST_USER = 'GET_MOST_USER';
export const GET_MOST_USER_SUCCESS = 'GET_MOST_USER_SUCCESS';
export const GET_MOST_USER_FAILURE = 'GET_MOST_USER_FAILURE';

export const GET_LESS_USER_LOADING = 'GET_LESS_USER_LOADING';
export const GET_LESS_USER = 'GET_LESS_USER';
export const GET_LESS_USER_SUCCESS = 'GET_LESS_USER_SUCCESS';
export const GET_LESS_USER_FAILURE = 'GET_LESS_USER_FAILURE';

export const GET_TOTAL_SOLD_LOADING = 'GET_TOTAL_SOLD_LOADING';
export const GET_TOTAL_SOLD = 'GET_TOTAL_SOLD';
export const GET_TOTAL_SOLD_SUCCESS = 'GET_TOTAL_SOLD_SUCCESS';
export const GET_TOTAL_SOLD_FAILURE = 'GET_TOTAL_SOLD_FAILURE';

export const GET_TOTAL_SOLD_LAST_MONTH_LOADING = 'GET_TOTAL_SOLD_LAST_MONTH_LOADING';
export const GET_TOTAL_SOLD_LAST_MONTH = 'GET_TOTAL_SOLD_LAST_MONTH';
export const GET_TOTAL_SOLD_LAST_MONTH_SUCCESS = 'GET_TOTAL_SOLD_LAST_MONTH_SUCCESS';
export const GET_TOTAL_SOLD_LAST_MONTH_FAILURE = 'GET_TOTAL_SOLD_LAST_MONTH_FAILURE';

export const GET_TOTAL_SOLD_LAST_DAY_LOADING = 'GET_TOTAL_SOLD_LAST_DAY_LOADING';
export const GET_TOTAL_SOLD_LAST_DAY = 'GET_TOTAL_SOLD_LAST_DAY';
export const GET_TOTAL_SOLD_LAST_DAY_SUCCESS = 'GET_TOTAL_SOLD_LAST_DAY_SUCCESS';
export const GET_TOTAL_SOLD_LAST_DAY_FAILURE = 'GET_TOTAL_SOLD_LAST_DAY_FAILURE';

export const GET_TOTAL_SOLD_LAST_HOUR_LOADING = 'GET_TOTAL_SOLD_LAST_HOUR_LOADING';
export const GET_TOTAL_SOLD_LAST_HOUR = 'GET_TOTAL_SOLD_LAST_HOUR';
export const GET_TOTAL_SOLD_LAST_HOUR_SUCCESS = 'GET_TOTAL_SOLD_LAST_HOUR_SUCCESS';
export const GET_TOTAL_SOLD_LAST_HOUR_FAILURE = 'GET_TOTAL_SOLD_LAST_HOUR_FAILURE';

//GET MOST ITEM
export const getMostItemLoading = () => {
    return {
        type: GET_MOST_ITEM_LOADING
    }
}
export const getMostItem = () => {
    const payload = Axios.get(mostItem);
    return {
        type: GET_MOST_ITEM,
        payload
    }
}
export const getMostItemSuccess = (item) => {
    return {
        type: GET_MOST_ITEM_SUCCESS,
        item
    }
}
export const getMostItemFailure = (error) => {
    return {
        type: GET_MOST_ITEM_FAILURE,
        error
    }
}

//GET LESS ITEM

export const getLessItemLoading = () => {
    return {
        type: GET_LESS_ITEM_LOADING
    }
}
export const getLessItem = () => {
    const payload = Axios.get(lessItem);
    return {
        type: GET_LESS_ITEM,
        payload
    }
}
export const getLessItemSuccess = (item) => {
    return {
        type: GET_LESS_ITEM_SUCCESS,
        item
    }
}
export const getLessItemFailure = (error) => {
    return {
        type: GET_LESS_ITEM_FAILURE,
        error
    }
}

//GET MOST USER
export const getMostUserLoading = () => {
    return {
        type: GET_MOST_USER_LOADING
    }
}
export const getMostUser = () => {
    const payload = Axios.get(mostUser);
    return {
        type: GET_MOST_USER,
        payload
    }
}
export const getMostUserSuccess = (user) => {
    return {
        type: GET_MOST_USER_SUCCESS,
        user
    }
}
export const getMostUserFailure = (error) => {
    return {
        type: GET_MOST_USER_FAILURE,
        error
    }
}

//GET LESS USER

export const getLessUserLoading = () => {
    return {
        type: GET_LESS_USER_LOADING
    }
}
export const getLessUser = () => {
    const payload = Axios.get(lessUser);
    return {
        type: GET_LESS_USER,
        payload
    }
}
export const getLessUserSuccess = (user) => {
    return {
        type: GET_LESS_USER_SUCCESS,
        user
    }
}
export const getLessUserFailure = (error) => {
    return {
        type: GET_LESS_USER_FAILURE,
        error
    }
}

//GET TOTAL SOLD

export const getTotalSoldLoading = () => {
    return {
        type: GET_TOTAL_SOLD_LOADING
    }
}
export const getTotalSold = () => {
    const payload = Axios.get(totalSold);
    return {
        type: GET_TOTAL_SOLD,
        payload
    }
}
export const getTotalSoldSuccess = (total) => {
    return {
        type: GET_TOTAL_SOLD_SUCCESS,
        total
    }
}
export const getTotalSoldFailure = (error) => {
    return {
        type: GET_TOTAL_SOLD_FAILURE,
        error
    }
}

//GET TOTAL SOLD LAST MONTH

export const getTotalSoldLastMonthLoading = () => {
    return {
        type: GET_TOTAL_SOLD_LAST_MONTH_LOADING
    }
}
export const getTotalSoldLastMonth = () => {
    const payload = Axios.get(totalSoldLastMonth);
    return {
        type: GET_TOTAL_SOLD_LAST_MONTH,
        payload
    }
}
export const getTotalSoldLastMonthSuccess = (total) => {
    return {
        type: GET_TOTAL_SOLD_LAST_MONTH_SUCCESS,
        total
    }
}
export const getTotalSoldLastMonthFailure = (error) => {
    return {
        type: GET_TOTAL_SOLD_LAST_MONTH_FAILURE,
        error
    }
}

//GET TOTAL SOLD LAST DAY

export const getTotalSoldLastDayLoading = () => {
    return {
        type: GET_TOTAL_SOLD_LAST_DAY_LOADING
    }
}
export const getTotalSoldLastDay = () => {
    const payload = Axios.get(totalSoldLastDay);
    return {
        type: GET_TOTAL_SOLD_LAST_DAY,
        payload
    }
}
export const getTotalSoldLastDaySuccess = (total) => {
    return {
        type: GET_TOTAL_SOLD_LAST_DAY_SUCCESS,
        total
    }
}
export const getTotalSoldLastDayFailure = (error) => {
    return {
        type: GET_TOTAL_SOLD_LAST_DAY_FAILURE,
        error
    }
}

//GET TOTAL SOLD LAST HOUR

export const getTotalSoldLastHourLoading = () => {
    return {
        type: GET_TOTAL_SOLD_LAST_HOUR_LOADING
    }
}
export const getTotalSoldLastHour = () => {
    const payload = Axios.get(totalSoldLastHour);
    return {
        type: GET_TOTAL_SOLD_LAST_HOUR,
        payload
    }
}
export const getTotalSoldLastHourSuccess = (total) => {
    return {
        type: GET_TOTAL_SOLD_LAST_HOUR_SUCCESS,
        total
    }
}
export const getTotalSoldLastHourFailure = (error) => {
    return {
        type: GET_TOTAL_SOLD_LAST_HOUR_FAILURE,
        error
    }
}