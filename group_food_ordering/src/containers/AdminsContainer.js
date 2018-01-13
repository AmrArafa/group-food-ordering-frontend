import { connect } from 'react-redux';
import Admins from '../components/Admin/Admins';
import { getAdminsLoading, getAdmins, getAdminsSuccess, getAdminsFailure,
        deleteAdminLoading, deleteAdmin, deleteAdminSuccess, deleteAdminFailure,
        addAdminLoading, addAdmin, addAdminSuccess, addAdminFailure
         } from '../actions/Admin/admins';

const mapStateToProps = (state) => {
    return {
        admins: state.admins.admins,
        loading: state.admins.loading,
        error: state.admins.error,
        success: state.admins.success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdmins: () => {
            dispatch(getAdminsLoading());
            setTimeout(() => {
                dispatch(getAdmins()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getAdminsSuccess(response.payload.data));
                    }else{
                        dispatch(getAdminsFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         deleteAdmin: (id) => {
            dispatch(deleteAdminLoading(id));
            setTimeout(() => {
                dispatch(deleteAdmin(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(deleteAdminSuccess(id));
                    }else{
                        dispatch(deleteAdminFailure(id));
                    }
                })
            }, 1)
        },

        addAdmin: (admin, callback) => {
            dispatch(addAdminLoading());
            setTimeout(() => {
                dispatch(addAdmin(admin)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(addAdminSuccess(response.payload.data));
                    }else{
                        dispatch(addAdminFailure(response.payload.message));
                    }
                })
            }, 1)
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Admins);
