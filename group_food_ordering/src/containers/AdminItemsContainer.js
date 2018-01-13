import { connect } from 'react-redux';
import AdminItems from '../components/Admin/AdminItems';
import { getItemsLoading, getItems, getItemsSuccess, getItemsFailure,
        deleteItemLoading, deleteItem, deleteItemSuccess, deleteItemFailure
         } from '../actions/Admin/items';

const mapStateToProps = (state) => {
    return {
        items: state.adminItems.items,
        loading: state.adminItems.loading,
        error: state.adminItems.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => {
            dispatch(getItemsLoading());
            setTimeout(() => {
                dispatch(getItems()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getItemsSuccess(response.payload.data));
                    }else{
                        dispatch(getItemsFailure(response.payload.message));
                    }
                })
            }, 1)
        },
         deleteItem: (id) => {
            dispatch(deleteItemLoading(id));
            setTimeout(() => {
                dispatch(deleteItem(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(deleteItemSuccess(id));
                    }else{
                        dispatch(deleteItemFailure(id));
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AdminItems);
