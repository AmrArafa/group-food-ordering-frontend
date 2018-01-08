import { connect } from 'react-redux';
import AdminInvitations from '../components/Admin/AdminInvitations';
import { editAdminLoading, editAdmin, editAdminSuccess, editAdminFailure,
        getAdminLoading, getAdmin, getAdminSuccess, getAdminFailure,
        getAdminsLoading, getAdmins, getAdminsSuccess, getAdminsFailure,
        getAdminByTokenLoading, getAdminByToken, getAdminByTokenSuccess, getAdminByTokenFailure
 } from '../actions/Admin/admins';

const mapStateToProps = (state) => {
    return {
        admin: state.admins.admin,
        admins: state.admins.admins,
        loading: state.admins.loading,
        error: state.admins.error,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        editAdmin: (token, admin) => {
            dispatch(editAdminLoading(token));
            setTimeout(() => {
                dispatch(editAdmin(token, admin)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(editAdminSuccess(response.payload.data));
                    }else{
                        dispatch(editAdminFailure(response.payload.message));
                    }
                })
            }, 1)
        },
        getAdminByToken: (token) => {
            dispatch(getAdminByTokenLoading());
            setTimeout(() => {
                dispatch(getAdminByToken(token)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getAdminByTokenSuccess(response.payload.data));
                    }else{
                        dispatch(getAdminByTokenFailure(response.payload.message));
                    }

                  })
                }, 1)

            }
        }
    }


const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        // Find the user with the id passed from the url by the route
         admin: stateProps.admins.find(admin => admin.adminBytoken == ownProps.match.params.token),
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AdminInvitations);
