import { connect } from 'react-redux';
import AdminDashBoard from '../components/Admin/AdminDashBoard';
import { 
    getMostItemLoading, getMostItem, getMostItemSuccess, getMostItemFailure,
    getLessItemLoading, getLessItem, getLessItemSuccess, getLessItemFailure,
    getMostUserLoading, getMostUser, getMostUserSuccess, getMostUserFailure,
    getLessUserLoading, getLessUser, getLessUserSuccess, getLessUserFailure,
    getTotalSoldLoading, getTotalSold, getTotalSoldSuccess, getTotalSoldFailure,
    getTotalSoldLastMonthLoading, getTotalSoldLastMonth, getTotalSoldLastMonthSuccess, getTotalSoldLastMonthFailure,
    getTotalSoldLastDayLoading, getTotalSoldLastDay, getTotalSoldLastDaySuccess, getTotalSoldLastDayFailure,
    getTotalSoldLastHourLoading, getTotalSoldLastHour, getTotalSoldLastHourSuccess, getTotalSoldLastHourFailure,
    getDashBoardLoading, getDashBoard, getDashBoardSuccess, getDashBoardFailure
    } from '../actions/Admin/dashBoard';

const mapStateToProps = (state) => {
    return {
        dashboard: state.AdminDashBoard.dashboard,
        mostItem: state.AdminDashBoard.mostItem,
        lessItem: state.AdminDashBoard.lessItem,
        mostUser: state.AdminDashBoard.mostUser,
        lessUser: state.AdminDashBoard.lessUser,
        totalSold: state.AdminDashBoard.totalSold,
        totalSoldLastMonth: state.AdminDashBoard.totalSoldLastMonth,
        totalSoldLastDay: state.AdminDashBoard.totalSoldLastDay,
        totalSoldLastHour: state.AdminDashBoard.totalSoldLastHour,
        error: state.AdminDashBoard.error,
        loadingMostItem: state.AdminDashBoard.loadingMostItem,
        loadingLessItem: state.AdminDashBoard.loadingLessItem,
        loadingMostUser: state.AdminDashBoard.loadingMostUser,
        loadinglessUser: state.AdminDashBoard.loadinglessUser,
        loadingTotalSold: state.AdminDashBoard.loadingTotalSold,
        loadingTotalMonth: state.AdminDashBoard.loadingTotalMonth,
        loadingTotalDay: state.AdminDashBoard.loadingTotalDay,
        loadingTotalHour: state.AdminDashBoard.loadingTotalHour,
        loadingDashBoard: state.AdminDashBoard.loadingDashBoard
        }
    }

const mapDispatchToProps = (dispatch) => {
    return {
        getDashBoard: () => {
            dispatch(getDashBoardLoading());
            setTimeout(() => {
                dispatch(getDashBoard()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getDashBoardSuccess(response.payload.data));
                    }else{
                        dispatch(getDashBoardFailure(response.payload.message));
                    }
                })
            }, 1)
        },
        getMostItem: () => {
            dispatch(getMostItemLoading());
            setTimeout(() => {
                dispatch(getMostItem()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getMostItemSuccess(response.payload.data));
                    }else{
                        dispatch(getMostItemFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         getLessItem: () => {
            dispatch(getLessItemLoading());
            setTimeout(() => {
                dispatch(getLessItem()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getLessItemSuccess(response.payload.data));
                    }else{
                        dispatch(getLessItemFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         getMostUser: () => {
            dispatch(getMostUserLoading());
            setTimeout(() => {
                dispatch(getMostUser()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getMostUserSuccess(response.payload.data));
                    }else{
                        dispatch(getMostUserFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         getLessUser: () => {
            dispatch(getLessUserLoading());
            setTimeout(() => {
                dispatch(getLessUser()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getLessUserSuccess(response.payload.data));
                    }else{
                        dispatch(getLessUserFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         getTotalSold: () => {
            dispatch(getTotalSoldLoading());
            setTimeout(() => {
                dispatch(getTotalSold()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getTotalSoldSuccess(response.payload.data));
                    }else{
                        dispatch(getTotalSoldFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         getTotalSoldLastMonth: () => {
            dispatch(getTotalSoldLastMonthLoading());
            setTimeout(() => {
                dispatch(getTotalSoldLastMonth()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getTotalSoldLastMonthSuccess(response.payload.data));
                    }else{
                        dispatch(getTotalSoldLastMonthFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         getTotalSoldLastDay: () => {
            dispatch(getTotalSoldLastDayLoading());
            setTimeout(() => {
                dispatch(getTotalSoldLastDay()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getTotalSoldLastDaySuccess(response.payload.data));
                    }else{
                        dispatch(getTotalSoldLastDayFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         getTotalSoldLastHour: () => {
            dispatch(getTotalSoldLastHourLoading());
            setTimeout(() => {
                dispatch(getTotalSoldLastHour()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getTotalSoldLastHourSuccess(response.payload.data));
                    }else{
                        dispatch(getTotalSoldLastHourFailure(response.payload.message));
                    }
                })
            }, 1)
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    
    return {
        // Find the user with the id passed from the url by the route
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AdminDashBoard);
