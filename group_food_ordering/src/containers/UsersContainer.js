import { connect } from 'react-redux';
import Users from '../components/Admin/Users';
import { getUsersLoading, getUsers, getUsersSuccess, getUsersFailure,
        deleteUserLoading, deleteUser, deleteUserSuccess, deleteUserFailure
         } from '../actions/users';

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        loading: state.users.loading,
        error: state.users.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersLoading());
            setTimeout(() => {
                dispatch(getUsers()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getUsersSuccess(response.payload.data));
                    }else{
                        dispatch(getUsersFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         deleteUser: (id) => {
            dispatch(deleteUserLoading(id));
            setTimeout(() => {
                dispatch(deleteUser(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(deleteUserSuccess(id));
                    }else{
                        dispatch(deleteUserFailure(id));
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Users);
