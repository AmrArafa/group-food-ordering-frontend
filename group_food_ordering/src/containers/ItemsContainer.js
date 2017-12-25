import { connect } from 'react-redux';
import Items from '../components/Items';
import {
    getItemsLoading, getItems, getItemsSuccess, getItemsFailure
} from '../actions/items';

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
        loading: state.items.loading,
        error: state.items.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItems : () => {
            dispatch(getItemsLoading());
            setTimeout(() => {
                dispatch(getItems()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getItemsSuccess(response.payload.data));
                    }else{
                        dispatch(getItemsFailure(response.payload.message));
                    }
                })
                 }, 2000)
        },
           }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);