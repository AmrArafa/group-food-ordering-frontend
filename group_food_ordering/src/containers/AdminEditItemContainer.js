import { connect } from 'react-redux';
import AdminEditItem from '../components/Admin/AdminEditItem';
import { editItemLoading, editItem, editItemSuccess, editItemFailure,
        getItemLoading, getItem, getItemSuccess, getItemFailure,
        getItemsLoading, getItems, getItemsSuccess, getItemsFailure,
 } from '../actions/items';

const mapStateToProps = (state) => {
    return {
        item: state.items.item,
        items: state.items.items,
        loading: state.items.loading,
        error: state.items.error,
        itemById: state.items
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
        editItem: (id, item) => {
            dispatch(editItemLoading(id));
            setTimeout(() => {
                dispatch(editItem(id, item)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(editItemSuccess(response.payload.data));
                    }else{
                        dispatch(editItemFailure(response.payload.message));
                    }
                })
            }, 1)
        },
        getItem: (id) => {
            dispatch(getItemLoading());
            setTimeout(() => {
                dispatch(getItem(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getItemSuccess(response.payload.data));
                    }else{
                        dispatch(getItemFailure(response.payload.message));
                    }

                  })
                }, 1)

            }
        }
    }


const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        // Find the user with the id passed from the url by the route
         item: stateProps.items.find(item => item.itemById == ownProps.match.params.id),
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AdminEditItem);
