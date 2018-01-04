import { connect } from 'react-redux';
import Groups from '../components/Groups';
import {
    getGroupsLoading, getGroups, getGroupsSuccess, getGroupsFailure,
    createGroupLoading, createGroup, createGroupSuccess, createGroupFailure,
    createOrderLoading, createOrder, createOrderSuccess, createOrderFailure
, createSingleOrder, createSingleOrderLoading, createSingleOrderSuccess, createSingleOrderFailure
} from '../actions/groups';

const mapStateToProps = (state) => {
    return {
        groups: state.groups.groups,
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

        createGroup: (timeframe, itemsIdsAndQuantity) => {
            dispatch(createGroupLoading());
                dispatch(createGroup(timeframe, itemsIdsAndQuantity)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(createGroupSuccess(response.payload.data));
                        window.location.reload();
                    }else{
                        dispatch(createGroupFailure(response.payload.message));
                    }
                })
        },

         createOrder: (id, itemsIdsAndQuantity) => {
             dispatch(createOrderLoading());
                dispatch(createOrder(id, itemsIdsAndQuantity)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(createOrderSuccess(response.payload.data));
                        
                    }else{
                        dispatch(createOrderFailure(response.payload.message));
                    }
                })
        },

           createSingleOrder: (itemsIdsAndQuantity) => {
             dispatch(createSingleOrderLoading());
                dispatch(createSingleOrder(itemsIdsAndQuantity)).then(response => {
                    if(response.payload.status < 400){
                        console.log('container', response.payload.data)         
                        dispatch(createSingleOrderSuccess(response.payload.data));
                       
                    }else{
                        dispatch(createSingleOrderFailure(response.payload.message));
                    }
                })
        }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);