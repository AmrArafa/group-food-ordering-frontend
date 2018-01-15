import { connect } from 'react-redux';
import Group from '../components/Group';
import {
   createOrderLoading, createOrder, createOrderSuccess, createOrderFailure
} from '../actions/groups';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            createOrder: (id, itemsIdsAndQuantity) => {
             dispatch(createOrderLoading());
                dispatch(createOrder(id, itemsIdsAndQuantity)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(createOrderSuccess(response.payload.data));
                        
                    }else{
                        dispatch(createOrderFailure(response.payload.message));
                    }
                })
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Group);
