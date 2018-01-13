import { connect } from 'react-redux';
import Groups from '../components/Groups';
import {
    getGroupsLoading, getGroups, getGroupsSuccess, getGroupsFailure,
    createGroupLoading, createGroup, createGroupSuccess, createGroupFailure,
createSingleOrder, createSingleOrderLoading, createSingleOrderSuccess, createSingleOrderFailure
} from '../actions/groups';

const mapStateToProps = (state) => {
    return {
        groups: state.groups.groups,
        group: state.groups.group,
        loading: state.groups.loading,
        error: state.groups.error,
        items: state.groups.items,
        creating: state.groups.creating,
        errorCreating: state.groups.errorCreating,
        itemsIdsAndQuantity: state.groups.itemsIdsAndQuantity,
        order: state.groups.order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGroups : () => {
            dispatch(getGroupsLoading());
            
                dispatch(getGroups()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getGroupsSuccess(response.payload.data));
                    }else{
                        dispatch(getGroupsFailure(response.payload.message));
                    }
                })
               
        },

        createGroup: (timeframe, itemsIdsAndQuantity, loggedInUserId) => {
            dispatch(createGroupLoading());
                dispatch(createGroup(timeframe, itemsIdsAndQuantity, loggedInUserId)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(createGroupSuccess(response.payload.data));
                    }else{
                        dispatch(createGroupFailure(response.payload.message));
                    }
                })
        },

           createSingleOrder: (itemsIdsAndQuantity) => {
             dispatch(createSingleOrderLoading());
                dispatch(createSingleOrder(itemsIdsAndQuantity)).then(response => {
                    if(response.payload.status < 400){       
                        dispatch(createSingleOrderSuccess(response.payload.data));
                       
                    }else{
                        dispatch(createSingleOrderFailure(response.payload.message));
                    }
                })
        }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);