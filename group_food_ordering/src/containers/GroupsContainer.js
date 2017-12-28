import { connect } from 'react-redux';
import Groups from '../components/Groups';
import {
    getGroupsLoading, getGroups, getGroupsSuccess, getGroupsFailure,
    createGroupLoading, createGroup, createGroupSuccess, createGroupFailure
} from '../actions/groups';

const mapStateToProps = (state) => {
    return {
        groups: state.groups.groups,
        loading: state.groups.loading,
        error: state.groups.error,
        items: state.groups.items,
        creating: state.groups.creating,
        errorCreating: state.groups.errorCreating
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

        createGroup: (timeframe, callback) => {
            dispatch(createGroupLoading());
                dispatch(createGroup(timeframe)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(createGroupSuccess(response.payload.data));
                        callback();
                    }else{
                        dispatch(createGroupFailure(response.payload.message));
                    }
                })
        }
           }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);