import { connect } from 'react-redux';
import Group from '../components/Group';
import {
    createOrder, createOrderItems
} from '../actions/groups';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createOrder : (id, itemsIdsAndQuantity) => {
          
                dispatch(createOrder(id, itemsIdsAndQuantity))
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Group);
